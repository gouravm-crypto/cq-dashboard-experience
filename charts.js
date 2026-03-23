function initCharts() {
  const font = { family: "'Segoe UI',Arial,sans-serif" };
  const tooltip = {
    backgroundColor: '#1c2a3a',
    titleFont: { ...font, size: 12 },
    bodyFont:  { ...font, size: 11 },
    padding: 10,
    cornerRadius: 8
  };

  // ── 1. CQ Score vs Targets — sorted high to low ──
  new Chart(document.getElementById('scoreChart'), {
    type: 'bar',
    data: {
      labels: ['Kruti_P','Gourav_M','Ankita_R','Tisha_J','Sayoni_P','Pratiksha_K','Saakshi_S'],
      datasets: [
        {
          label: 'CQ Score',
          data: [88, 87, 86, 84, 80, 78, 77],
          backgroundColor: ['#3a9e50','#3a9e50','#3a9e50','#3a9e50','#e07030','#e07030','#e07030'],
          borderRadius: 6, barPercentage: 0.58, categoryPercentage: 0.8, order: 2
        },
        {
          label: 'Team Target 95%',
          data: [95,95,95,95,95,95,95],
          type: 'line', borderColor: '#dc2626', borderWidth: 2,
          borderDash: [6,4], pointRadius: 0, fill: false, order: 1
        },
        {
          label: 'Individual Target 85%',
          data: [85,85,85,85,85,85,85],
          type: 'line', borderColor: '#f59e0b', borderWidth: 1.5,
          borderDash: [3,3], pointRadius: 0, fill: false, order: 1
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      layout: { padding: { top: 16, bottom: 0 } },
      plugins: {
        tooltip,
        legend: { display: true, position: 'bottom', labels: { font: { ...font, size: 11 }, boxWidth: 12, padding: 12, usePointStyle: true } }
      },
      scales: {
        y: { min: 60, max: 100, ticks: { callback: v => v + '%', font: { ...font, size: 11 }, stepSize: 10 }, grid: { color: 'rgba(128,128,128,.1)' } },
        x: { ticks: { font: { ...font, size: 10 }, maxRotation: 20 }, grid: { display: false } }
      }
    },
    plugins: [{
      id: 'barLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        ctx.save();
        meta.data.forEach((bar, i) => {
          const val = chart.data.datasets[0].data[i];
          if (bar.height < 14) return;
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 10px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(val + '%', bar.x, bar.y + bar.height * 0.5);
        });
        ctx.restore();
      }
    }]
  });

  // ── 2. Error Distribution Doughnut ──
  new Chart(document.getElementById('errorChart'), {
    type: 'doughnut',
    data: {
      labels: ['Soft Skills','Probing','Solution & Rec.','Follow Up'],
      datasets: [{
        data: [39, 34, 8, 1],
        backgroundColor: ['#ea580c','#2563eb','#dc2626','#16a34a'],
        borderWidth: 2, borderColor: '#fff', hoverOffset: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { animateRotate: true, animateScale: true, duration: 1200, easing: 'easeOutQuart' },
      layout: { padding: { top: 4, bottom: 0 } },
      plugins: {
        tooltip,
        legend: { display: true, position: 'bottom', labels: { font: { ...font, size: 11 }, boxWidth: 12, padding: 10, usePointStyle: true } }
      },
      cutout: '60%'
    },
    plugins: [{
      id: 'doughnutLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        const total = chart.data.datasets[0].data.reduce((a,b)=>a+b,0);
        ctx.save();
        meta.data.forEach((arc, i) => {
          const val = chart.data.datasets[0].data[i];
          const pct = Math.round((val / total) * 100);
          if (pct < 5) return;
          const angle = (arc.startAngle + arc.endAngle) / 2;
          const r = (arc.innerRadius + arc.outerRadius) / 2;
          const x = arc.x + r * Math.cos(angle);
          const y = arc.y + r * Math.sin(angle);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 11px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(pct + '%', x, y);
        });
        ctx.restore();
      }
    }]
  });

  // ── 3. Errors per Agent — worst to best ──
  new Chart(document.getElementById('agentErrorChart'), {
    type: 'bar',
    data: {
      labels: ['Pratiksha_K','Sayoni_P','Saakshi_S','Gourav_M','Kruti_P','Ankita_R','Tisha_J'],
      datasets: [{
        label: 'Total Errors',
        data: [17, 14, 13, 11, 10, 9, 8],
        backgroundColor: ['#dc2626','#dc2626','#ea580c','#ea580c','#2563eb','#2563eb','#2563eb'],
        borderRadius: 6, barPercentage: 0.58, categoryPercentage: 0.8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      indexAxis: 'y',
      animation: { duration: 1200, easing: 'easeOutQuart' },
      layout: { padding: { right: 24, top: 4, bottom: 0 } },
      plugins: { tooltip, legend: { display: false } },
      scales: {
        x: { min: 0, max: 22, ticks: { font: { ...font, size: 11 }, stepSize: 4 }, grid: { color: 'rgba(128,128,128,.1)' } },
        y: { ticks: { font: { ...font, size: 11 } }, grid: { display: false } }
      }
    },
    plugins: [{
      id: 'hbarLabels',
      afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        ctx.save();
        meta.data.forEach((bar, i) => {
          const val = chart.data.datasets[0].data[i];
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 11px Segoe UI,Arial,sans-serif';
          ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
          ctx.fillText(val, bar.x - 6, bar.y);
        });
        ctx.restore();
      }
    }]
  });

  // ── 4. Heatmap ──
  buildHeatmap();
}

function buildHeatmap() {
  const container = document.getElementById('heatmapContainer');
  if (!container) return;

  // Sorted by CQ high→low
  const agents = ['Kruti_P','Gourav_M','Ankita_R','Tisha_J','Sayoni_P','Pratiksha_K','Saakshi_S'];
  const params = ['Soft Skills','Solution','Probing','Follow Up'];
  const errors = [
    [4, 2, 4, 0],   // Kruti
    [5, 1, 5, 0],   // Gourav
    [5, 0, 4, 0],   // Ankita
    [3, 1, 4, 0],   // Tisha
    [7, 1, 5, 1],   // Sayoni
    [10,1, 6, 0],   // Pratiksha
    [5, 2, 6, 0]    // Saakshi
  ];

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  function cell(v) {
    if (v === 0) return isDark ? { bg:'#052e16', bd:'#166534', tx:'#4ade80' } : { bg:'#f0fdf4', bd:'#bbf7d0', tx:'#166534' };
    if (v <= 2)  return isDark ? { bg:'#422006', bd:'#a16207', tx:'#fde68a' } : { bg:'#fef9c3', bd:'#fde047', tx:'#713f12' };
    if (v <= 4)  return isDark ? { bg:'#431407', bd:'#c2410c', tx:'#fed7aa' } : { bg:'#fed7aa', bd:'#fb923c', tx:'#7c2d12' };
    if (v <= 6)  return isDark ? { bg:'#450a0a', bd:'#991b1b', tx:'#fca5a5' } : { bg:'#fca5a5', bd:'#ef4444', tx:'#7f1d1d' };
    return isDark ? { bg:'#7f1d1d', bd:'#dc2626', tx:'#fff' } : { bg:'#dc2626', bd:'#dc2626', tx:'#fff' };
  }

  const txP = isDark ? '#e8e4f0' : '#1c2a3a';
  const txS = isDark ? '#9c8a70' : '#8a7a60';
  const txH = isDark ? '#6a5a50' : '#b8a888';

  let h = `<div style="overflow-x:auto;"><table style="width:100%;border-collapse:separate;border-spacing:4px;min-width:340px;">
    <thead><tr>
      <th style="font-size:11px;font-weight:600;color:${txS};text-align:left;padding:2px 8px;white-space:nowrap;">Agent</th>`;
  params.forEach(p => {
    h += `<th style="font-size:10px;font-weight:600;color:${txS};text-align:center;padding:2px 4px;white-space:nowrap;">${p}</th>`;
  });
  h += `</tr></thead><tbody>`;

  agents.forEach((a, i) => {
    h += `<tr><td style="font-size:12px;font-weight:600;padding:3px 8px;white-space:nowrap;color:${txP};">${a}</td>`;
    errors[i].forEach(v => {
      const c = cell(v);
      h += `<td style="padding:3px;"><div style="background:${c.bg};border:1px solid ${c.bd};border-radius:8px;padding:8px 2px;text-align:center;font-size:14px;font-weight:700;color:${c.tx};min-width:32px;">${v === 0 ? '✓' : v}</div></td>`;
    });
    h += `</tr>`;
  });
  h += `</tbody></table></div>`;

  const lbg = isDark ? ['#052e16','#422006','#431407','#450a0a','#7f1d1d'] : ['#f0fdf4','#fef9c3','#fed7aa','#fca5a5','#dc2626'];
  const lbd = isDark ? ['#166534','#a16207','#c2410c','#991b1b','#dc2626'] : ['#bbf7d0','#fde047','#fb923c','#ef4444','#dc2626'];
  h += `<div style="display:flex;align-items:center;gap:8px;margin-top:12px;justify-content:center;flex-wrap:wrap;">
    <span style="font-size:11px;color:${txS};">0</span>
    <div style="display:flex;gap:3px;">${lbg.map((bg,i)=>`<div style="width:16px;height:16px;border-radius:3px;background:${bg};border:1px solid ${lbd[i]};"></div>`).join('')}</div>
    <span style="font-size:11px;color:${txS};">7+</span>
    <span style="font-size:10px;color:${txH};margin-left:4px;">✓ = zero errors &nbsp;·&nbsp; lower is better</span>
  </div>`;

  container.innerHTML = h;
}

document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  new MutationObserver(() => buildHeatmap())
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
});
