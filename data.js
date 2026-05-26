const AGENTS = {
  tisha: {
    name:"Tisha_J", initials:"TJ", color:"#c8a846",
    cq:98, audits:7, ncf:0, totalErrors:1,
    params:{ss:0, sol:1, prob:0, fu:0, tag:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Verify process details before advising cx — in the detractor callback, Tisha told the cx the feedback link could be reshared, which is incorrect once submitted. Always confirm what is actually possible before committing to a cx. A verbal rating should have been taken to manually update the score instead."}
    ],
    cases:[
      {query:"Store escalation — ticket", score:100, comment:"Good Work!!"},
      {query:"Detractor callback — reshare feedback link", score:92, comment:"Cx rated by mistake, asked to reshare the feedback link. Tisha said ok sure. Incorrect statement — there is no option to reshare once submitted. Should have taken a verbal rating to manually change it."},
      {query:"Detractor callback", score:100, comment:"Good work!"},
      {query:"Detractor callback", score:100, comment:"Good work! AOI — Drop a WhatsApp and raise a ticket on such cases going forward (not mandatory but additional effort may prevent escalation to wow)."},
      {query:"Detractor callback", score:100, comment:"Great Work!! AOI — Avoid using 'product ke related'. The rating is for overall experience, not just product."},
      {query:"Detractor callback", score:100, comment:"Great Work!!"},
      {query:"Detractor callback", score:100, comment:"Great Work!! AOI — Avoid using Ma'am/Sir multiple times."}
    ],
    paramCaseMap:{ss:[], sol:[1], prob:[], fu:[], tag:[]}
  },
  mallika: {
    name:"Mallika_R", initials:"MR", color:"#16a34a",
    cq:98, audits:7, ncf:0, totalErrors:1,
    params:{ss:0, sol:1, prob:0, fu:0, tag:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Connect with the cx directly — when a store reaches out for help with a difficult crown customer, advising them to follow policy is correct but incomplete. Whenever feasible, attempt to connect with the cx personally. A direct conversation from the escalation team often de-escalates what a store-level interaction cannot."}
    ],
    cases:[
      {query:"Store escalation — GWD", score:100, comment:"Good Work!!"},
      {query:"Store escalation — educated store on process", score:100, comment:"Good Work, educated the store on this."},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Store escalation — respective people added", score:100, comment:"Good Work!! Respective people added."},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Crown customer — repair escalation", score:93, comment:"Store reached out via SE seeking assistance with a troublesome crown customer. Mallika advised the store to stick to policy as no other alternative is feasible. AOI — Mallika should have tried to connect with the cx herself at least once."},
      {query:"Store escalation", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[], sol:[5], prob:[], fu:[], tag:[]}
  },
  kruti: {
    name:"Kruti_P", initials:"KP", color:"#2563eb",
    cq:96, audits:7, ncf:0, totalErrors:1,
    params:{ss:0, sol:0, prob:0, fu:0, tag:1},
    aois:[
      {cat:"tag", label:"Tagging", text:"Tagging when store is at fault — when the issue originates from a store error, the ticket must be tagged correctly and the escalation must be raised to RBM, RM, and BP (if applicable). Correct tagging is not just administrative — it determines who is held accountable and how the case is tracked."}
    ],
    cases:[
      {query:"Store escalation", score:100, comment:"Good work!!"},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Store escalation — multiple follow-ups pending", score:100, comment:"Good work!! AOI — If you see store and internal teams following up multiple times, add a follow-up email or call the respective store (Dehradun store in this case) for priority reply."},
      {query:"Store escalation — tagging error", score:87, comment:"Good Work!! AOI — Since it is a store's mistake, you need to highlight it to the RBM, RM and BP (if applicable). Tagging to be corrected."},
      {query:"Refund delay — escalation to wow", score:100, comment:"Customer's order was returned and there was a delay in refund. Cx reached out to the store. Kruti connected with the customer, shared the ARN number and followed up on the refund. Escalation converted to positive experience."},
      {query:"Irate cx — delay delivery, compensation given", score:100, comment:"Customer was irate about delay in delivery and this was turning into a major escalation. Kruti spoke to the customer, provided a 3% delay compensation, and ensured the product arrived on time by reaching out to the right teams."}
    ],
    paramCaseMap:{ss:[], sol:[], prob:[], fu:[], tag:[4]}
  },
  ajmal: {
    name:"Ajmal_A", initials:"AA", color:"#dc2626",
    cq:96, audits:7, ncf:0, totalErrors:2,
    params:{ss:0, sol:1, prob:0, fu:1, tag:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Escalate proactively when internal teams go silent — when the buying team failed to respond for 3+ days, Ajmal should have personally called the buying team, raised an SR ticket via support, or pinged the ticket in the Greenline group or escalated to Shrutiji. Adding the respective team is step one, not the last step."},
      {cat:"fu", label:"Follow Up", text:"Personalised follow-up with the customer — dropping a WhatsApp to the customer when calls go unanswered is a standard follow-up protocol. Multiple callback attempts are noted and appreciated, but personalised outreach via WhatsApp ensures the cx feels attended to even when not reachable by call."}
    ],
    cases:[
      {query:"Store escalation — internally handled", score:100, comment:"Good Work!! Internally handled — try to connect with the cx yourself as well so you get the escalation to wow."},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Store escalation — TC related", score:100, comment:"Good Work!! AOI — Just add a follow-up note."},
      {query:"Store escalation — product quality", score:100, comment:"Good Work!!"},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Delay delivery — buying team unresponsive", score:92, comment:"Delay in order delivery, store needed urgent internal support. Ajmal added the respective team but they failed to revert for more than 3 days. AOI — Should have personally called the buying team or raised an SR ticket via support and pinged in Greenline group or to Shrutiji for further escalation."},
      {query:"Delay in order — callback follow up", score:92, comment:"Store requested help with callback and assistance regarding order delay. Ajmal acted on the ticket with multiple callbacks. Ownership noted. AOI — Should always drop a WhatsApp to the customer in case of no response after two attempts."}
    ],
    paramCaseMap:{ss:[], sol:[5], prob:[], fu:[6], tag:[]}
  },
  ankita: {
    name:"Ankita_R", initials:"AR", color:"#7c3aed",
    cq:43, audits:7, ncf:4, totalErrors:6,
    params:{ss:2, sol:1, prob:1, fu:1, tag:1},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Take ownership instead of re-directing — in two cases, Ankita redirected to other teams (store or tech) without adding any value beyond what the store had already tried. When the store has already attempted the same step, we must go further — share a policy link, address the cx directly, or re-escalate differently. Re-directing without adding value is not a resolution."},
      {cat:"ss", label:"Soft Skills", text:"Tone with store partners — replying 'I hope you are aware about the TC policy' to a store that had already tried convincing an irate cx is dismissive and sarcastic. Store escalations require the same empathy and care as cx calls. Acknowledge the difficulty before stating what is possible."},
      {cat:"fu", label:"Follow Up", text:"Alternative follow-up when calls go unanswered — dropping a WhatsApp, email or SMS is standard protocol after two unanswered call attempts. Closing a ticket as 'nothing can be done' while a cx is irate at store floor is not acceptable. Every commitment and every live escalation must be followed through."},
      {cat:"prob", label:"Probing", text:"Read the urgency before applying standard process — in the TC case, the cx was on the store floor creating a scene. Applying normal follow-up norms during a live floor escalation caused unnecessary delay and further distress. Always assess urgency first."},
      {cat:"tag", label:"Tagging", text:"No ticket should be marked spam — one case was incorrectly marked spam causing a 5-day gap in cx communication. Correct tagging is critical for accountability and case tracking."}
    ],
    cases:[
      {query:"Store escalation — Treasure Chest cancellation", score:0, comment:"Store reached out regarding a cx wanting to cancel a Treasure Chest due to product quality. Despite the store already informing the cx, Ankita re-directed back to the store without sharing the policy link, written confirmation, or addressing the cx herself. NCF — re-directing a store that had already tried the same approach without adding any value."},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Store escalation — follow up", score:100, comment:"Good Work!! Please maintain such type of follow ups."},
      {query:"Store escalation — refund delay, cx not called", score:0, comment:"Store asked team to call cx and update on 13th May. Team chose not to call until 18th, leaving cx without updates for 5+ days. Ticket was also marked spam. NCF under ZTP. AOI — Always connect with cx if the store is asking. No tickets should be marked spam."},
      {query:"Store escalation", score:100, comment:"Good Work!!"},
      {query:"Store escalation — TC policy, irate cx at store floor", score:0, comment:"Store sought escalation support for irate cx miscommunicated by online team that moneyback was possible on TC order. Ankita tried calling twice (unanswered) but replied to store 'I hope you are aware about the TC policy' — rude and unhelpful. Closed as nothing can be done without dropping WhatsApp/email/SMS. Store retained cx via exchange themselves. NCF — failed ownership, tone, and follow-up standard."},
      {query:"Store escalation — profile name change", score:0, comment:"Store requested help changing cx profile name for future orders. Redirected to tech team who failed to understand query twice. Ankita replied with same incorrect response and closed ticket without re-escalating differently. Store issue went unresolved."}
    ],
    paramCaseMap:{ss:[3,5], sol:[5], prob:[5], fu:[3], tag:[3]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", fu:"Follow Up", tag:"Tagging"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", fu:"#16a34a", tag:"#7c3aed"};
