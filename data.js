const AGENTS = {
  tisha: {
    name:"Tisha_J", initials:"TJ", color:"#c8a846",
    cq:96, audits:5, ncf:0, totalErrors:2,
    params:{ss:0, sol:0, prob:0, fu:0, tag:2},
    aois:[
      {cat:"tag", label:"Tagging", text:"Tagging accuracy — two audits flagged incorrect tagging. Always verify whether a ticket should be tagged as internal or external before closing. A well-resolved case loses marks only on tagging — make it a habit to double-check before submission."}
    ],
    cases:[
      {query:"Escalation handling", score:100, comment:"Good work handling the escalation. Connect with Abrar on call and get this closed today anyhow."},
      {query:"Tagging error", score:91, comment:"Good job. AOI — Incorrect Tagging. Ensure ticket is not tagged internal when it should be external."},
      {query:"Tech error — refund delay", score:91, comment:"iRate cx, bank details were not updated to the right email id. Tech error leading to refund delay. Good work on resolving and handling escalation cx with personal follow up! AOI — Tagging to be correct in future, it is not an internal email."},
      {query:"Audit case", score:100, comment:"Good Work!"},
      {query:"Audit case", score:100, comment:"Good Work"}
    ],
    paramCaseMap:{ss:[], sol:[], prob:[], fu:[], tag:[1,2]}
  },
  mallika: {
    name:"Mallika_R", initials:"MR", color:"#16a34a",
    cq:93, audits:13, ncf:0, totalErrors:15,
    note:"13 audits — 8 from IB team (start of month) + 5 from Experience team",
    params:{ss:7, sol:0, prob:1, fu:0, tag:7},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy on calls — multiple IB audits flagged low empathy, especially when cx is irate about refund delays or process issues. Acknowledge the cx's frustration with ownership phrases before moving to resolution. Empathy is a must on every call."},
      {cat:"tag", label:"Tagging", text:"Tagging discipline — majority of IB audits and one EXP audit flagged incorrect or missing tags. Always tag the ticket correctly before closing. This is a consistent AOI and needs to be a priority going forward."},
      {cat:"prob", label:"Probing", text:"Complete information before closing — in the POP cancellation case, missed informing cx of the full redemption and cash-out timeline. Always share complete policy details so cx has everything they need in one go."}
    ],
    cases:[
      {query:"15 Days Moneyback (IB)", score:100, comment:"Cx contacted about return status under 15-day moneyback. JC checked details and tried to retain cx. When cx wanted to proceed, JC helped accordingly. Overall a good call."},
      {query:"Refund Status (IB)", score:100, comment:"Cx raised LTB and refund not yet credited. Cx was irate due to delay. JC informed details and TAT. Good handling of an irate cx."},
      {query:"Order Status (IB)", score:100, comment:"Overall a fine chat for the delay in dispatch and delivery of the order."},
      {query:"Refund (IB)", score:88, comment:"Cx contacted about RTO order refund. JC informed update and raised RTO request. AOI — couldn't understand what cx tried to mention at the end. Could have transferred call to IVR for a cleaner close."},
      {query:"Order Status (IB)", score:100, comment:"Order delivery status — JC checked and informed TAT of 24 hrs for delivery and confirmed phone number."},
      {query:"GWD (IB)", score:88, comment:"GWD query — JC informed refund was done on 19th Feb and transaction number was shared. AOI — needs a little more empathy on call since cx has not yet received the amount."},
      {query:"POP Cancellation (IB)", score:41, comment:"POP cancellation query. JC informed POP redemption details but missed informing cx about the full cash-out process — post 90 days transfer to Digi Gold with deductions and GST. No empathy on call. Incomplete information shared."},
      {query:"Refund Status (IB)", score:100, comment:"Cx called again for refund update. JC checked and informed TAT. ERP issue acknowledged. Good handling."},
      {query:"Repair Status (EXP)", score:100, comment:"Well Done!"},
      {query:"Repair Status (EXP)", score:91, comment:"Cx had a query with repair status. Mallika checked details and got it expedited. Proper follow up made with detailed notes. Good work! AOI — failed to tag in Ameyo while doing outbound call."},
      {query:"Customer Support (EXP)", score:100, comment:"Well Done! AOI — Empathy is a must."},
      {query:"Support (EXP)", score:100, comment:"Good Job!"},
      {query:"GWD (EXP)", score:100, comment:"Handled well, educated the store as well. Very good."}
    ],
    paramCaseMap:{ss:[1,2,3,4,5,6,7], sol:[], prob:[6], fu:[], tag:[1,2,4,5,6,7,9]}
  },
  kruti: {
    name:"Kruti_P", initials:"KP", color:"#2563eb",
    cq:89, audits:5, ncf:0, totalErrors:5,
    params:{ss:0, sol:1, prob:0, fu:1, tag:3},
    aois:[
      {cat:"tag", label:"Tagging", text:"Tagging — three out of five audits flagged incorrect tagging, including tickets tagged as internal when they should not be. Always verify the ticket type before submission. This is a recurring issue that directly impacts the score."},
      {cat:"sol", label:"Solution", text:"Follow through on commitments — when a callback is committed, it must be done. In one case, the cx reached out again after another agent had already resolved the issue because Kruti's callback was missed. Always verify if the issue was already resolved before marking closed."},
      {cat:"fu", label:"Follow Up", text:"Check existing tickets before committing a new callback — cross-checking alternate tickets avoids duplication, missed follow-ups, and unnecessary cx frustration."}
    ],
    cases:[
      {query:"Missed callback", score:66, comment:"JC committed a callback but failed to connect with cx. Tisha had already taken care of it in an alternate ticket but Kruti failed to check. Store still asked for a second callback post Tisha's call. Could have done better."},
      {query:"Tagging error", score:91, comment:"Good work. AOI — Tagging incorrect."},
      {query:"Twitter escalation", score:100, comment:"Twitter escalation and ticket ongoing as well. Good work!"},
      {query:"Tagging error", score:91, comment:"Excellent call but JC tagged the ticket as internal."},
      {query:"Audit case", score:100, comment:"Good Work"}
    ],
    paramCaseMap:{ss:[], sol:[0], prob:[], fu:[0], tag:[0,1,3]}
  },
  ajmal: {
    name:"Ajmal_A", initials:"AA", color:"#dc2626",
    cq:60, audits:5, ncf:2, totalErrors:6,
    params:{ss:2, sol:1, prob:0, fu:2, tag:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Phrase quality and interruptions — in both NCF cases, incorrect or casual phrases were used (e.g. 'We know waiting isn't fun') and cx was interrupted multiple times. Use ownership-driven, empathetic language especially when cx is already upset. Never interrupt a cx who is explaining a grievance."},
      {cat:"fu", label:"Follow Up", text:"Follow up as committed — in two cases, follow-up was promised but not done. Cx had to reach out multiple times. Every commitment made on a call must be honoured. If a follow-up cannot be completed, escalate and notify before the deadline."},
      {cat:"sol", label:"Solution", text:"Verify information before sharing — in one NCF case, incorrect details were given to the cx. Always confirm the details you are about to share, especially for complaint or grievance calls where cx trust is already low."}
    ],
    cases:[
      {query:"Delay delivery — gold coin", score:100, comment:"Delay delivery of gold coin. Good call."},
      {query:"NCF — grievance, nobody picking call", score:0, comment:"NCF — Customer was complaining about nobody picking the call on grievances. Consultant apologised but interrupted the customer multiple times. Failed to understand cx query. Incorrect details shared. Follow up missed on email despite cx reaching out several times."},
      {query:"NCF — delay delivery complaint", score:0, comment:"NCF — Customer reached out with a complaint on delay delivery. Agent used incorrect phrases ('We know waiting isn't fun'). Failed to follow up as committed."},
      {query:"Audit case", score:100, comment:"Good work."},
      {query:"Audit case", score:100, comment:"Good work."}
    ],
    paramCaseMap:{ss:[1,2], sol:[1], prob:[], fu:[1,2], tag:[1]}
  },
  ankita: {
    name:"Ankita_R", initials:"AR", color:"#7c3aed",
    cq:58, audits:5, ncf:1, totalErrors:8,
    params:{ss:0, sol:3, prob:1, fu:3, tag:1},
    aois:[
      {cat:"sol", label:"Solution", text:"Ownership on resolution — in multiple cases, Ankita added support teams or noted concerns without taking clear ownership of the next step. If we are added to a ticket, we must lead the resolution, not just observe. The cx and store should not have to follow up themselves."},
      {cat:"fu", label:"Follow Up", text:"Committed follow-ups must be done — in three cases, callbacks or store notifications were committed but not completed. Cx had to reach out again, and in one case the store resolved it themselves. Every commitment is a trust promise — honour it."},
      {cat:"prob", label:"Probing", text:"Read the urgency of the situation — in the NCF case, the cx was at the store floor and needed immediate backend support. Applying standard working-hour norms during a live escalation caused a delayed response. Always assess the urgency before applying process."}
    ],
    cases:[
      {query:"Store — order delay notification missed", score:50, comment:"Store reached out regarding a customer's order delay. JC failed to notify the store about updates or inform if someone from backend was already in touch. Failed to callback/notify the store or cx as committed. Ticket tagged as internal despite the store asking to call the cx."},
      {query:"Order delay", score:100, comment:"Delay — Respective people added. Good work."},
      {query:"NCF — ERP migration, store support", score:0, comment:"NCF — Customer concern regarding tech issues due to ERP migration. Store was unable to take an inward for exchange. Needed backend help to calm cx who was on the floor. Should not apply working-hour norms during live escalations. Delayed response. Missed follow up. Store resolved it themselves eventually."},
      {query:"Ownership failure — store escalation", score:41, comment:"Consultant failed to take ownership and take required action by notifying the store on the process. Casually added the support team which the store could have done themselves. No point of being added if we fail to take ownership."},
      {query:"Order delay", score:100, comment:"Order delay. Respective people added. Order dispatched. Good work."}
    ],
    paramCaseMap:{ss:[], sol:[0,2,3], prob:[2], fu:[0,2,3], tag:[0]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", fu:"Follow Up", tag:"Tagging"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", fu:"#16a34a", tag:"#7c3aed"};
