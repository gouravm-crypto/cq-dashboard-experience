const AGENTS = {
  tisha: {
    name:"Tisha_J", initials:"TJ", color:"#c8a846",
    cq:48, audits:7, ncf:3, totalErrors:9,
    note:"Tisha's NCF count reflects 3 unique NCFs across 7 audits. Two cases (crown cx delay & TC digi-gold policy) were NCF-worthy due to policy knowledge gaps and follow-up failures.",
    params:{ss:1, sol:4, prob:0, fu:4, tag:2},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Know the policy before replying — in the TC/digi-gold case, Tisha did not understand that when TC redemption fails the principal amount converts to digi-gold with GST deductions and live gold rate. She should have applied this policy immediately, cleared it to the store, and escalated to Rumela for an exception given the cx's purchase history. Incorrect or incomplete policy knowledge at a senior level is an NCF."},
      {cat:"fu", label:"Follow Up", text:"Never close a pending case without resolution — across multiple cases, Tisha marked tickets closed while the store was still waiting for updates or while teams had not reverted. On urgent cases (cx flying abroad, crown cx delay), keeping a follow-up and topping up with senior POCs on Monday was non-negotiable. Closing instead of keeping pending is a recurring pattern that must stop."},
      {cat:"tag", label:"Tagging", text:"Ticket status discipline — tickets with open actions should remain on Pending. Closing them removes visibility and breaks follow-up accountability. Marking as internal without reverting to store is equally incorrect."},
      {cat:"ss", label:"Soft Skills", text:"Ownership in communication — copy-pasting the same POC tags with no content change across multiple responses shows a lack of genuine engagement. Each follow-up must have a fresh action, an updated status, or a proposed alternate resolution."}
    ],
    cases:[
      {query:"Detractor call — cx rated 1", score:100, comment:"Detractor call rated 1. Tisha tried to obtain further feedback but the cx was busy. Good Call overall."},
      {query:"Store escalation — urgent MTO order, cx flying abroad", score:0, comment:"Store proactively flagged a ₹1.53L order on Sunday — system assigned the available barcode to another store and cx was flying abroad on Tuesday. Tisha added support but received no reply. No follow-up from Tisha on Monday, ticket closed instead of kept pending. By Tuesday there was still no update for the store. AOI — Should have followed up with support Monday EOD, knowing the urgency, or suggested an alternate resolution."},
      {query:"Store escalation — ticket closed, follow-up needed", score:56, comment:"Store specifically asked for follow-up and assistance. Tisha added the right POCs but marked the ticket closed — should have kept it pending. A top-up message Monday EOD was mandatory since no response was received."},
      {query:"Store escalation — good resolution", score:100, comment:"Good work!! AOI — Please highlight such cases to the RBM."},
      {query:"Store escalation — crown cx delayed order, ILO pending", score:78, comment:"Crown cx's order was delayed. Tisha added the right POCs, escalated to Niraj and Amit. No replies received. Added Niraj again on 21st June and closed the ticket. AOI — A follow-up should have been kept for a Crown cx + delayed order. Should have re-added Amit and further senior POCs as a top-up rather than closing."},
      {query:"Store escalation — TC/digi-gold policy, NCF", score:0, comment:"Store reached out regarding expired CTC being converted to digi-gold. Cx was unhappy with lesser visible value. Tisha failed to understand that TC redemption failure converts the principal to digi-gold with GST deductions and live gold rate fluctuations. Gave incorrect/incomplete reply, did not apply self-knowledge, marked support reply as internal with no follow-up. Given cx had bought a ₹1.5L bracelet just days prior, Tisha should have added Rumela for an exception. NCF — lack of policy knowledge and complete absence of ownership."},
      {query:"Store escalation — march order delay, copy-paste responses", score:0, comment:"Store escalated a March-month order lacking updates. Tisha added the team on 28th May but copy-pasted the same tagged POCs multiple times with no content change — despite knowing that team no longer checks emails and a separate process applies. Ticket closed as internal on 31st May with no follow-up. On 1st June a CLIVE barcode was assigned (non-dispatchable); Tisha did not check this or identify that an alt barcode (LD66UTAL8LL) was available. No internal approval email, no confirmation to store. NCF — failed follow-up, failed ownership, copy-paste without value."}
    ],
    paramCaseMap:{ss:[6], sol:[1,5,6], prob:[], fu:[1,2,4,6], tag:[1,2]}
  },

  mallika: {
    name:"Mallika_R", initials:"MR", color:"#16a34a",
    cq:73, audits:5, ncf:1, totalErrors:3,
    note:"Mallika is on notice period — 5 audits only. 1 NCF recorded.",
    params:{ss:1, sol:1, prob:0, fu:0, tag:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Tone and call manner — in the call audit, Mallika interrupted the customer and the tone was not inviting. On calls with cx or store partners, patience and measured tone are non-negotiable. Avoid interrupting, especially when a cx is sharing their concern."},
      {cat:"sol", label:"Solution & Rec.", text:"Read the ticket before asking for details — in the NCF case, the store had already shared the customer details and a reference ticket ID. Mallika asked for the same information again, wasting time. She eventually redirected to the right team, but the delay and cx cancel could have been avoided by acting faster and calling the cx herself on priority."}
    ],
    cases:[
      {query:"Store escalation", score:100, comment:"Good work!!"},
      {query:"Store escalation — call audit, tone issue", score:81, comment:"Should avoid interrupting the customer and the tone & manner was not right."},
      {query:"Store escalation — respective people added", score:100, comment:"Respective people added and notified."},
      {query:"Store escalation — NCF, EDD miss, cx cancelled", score:0, comment:"Store had escalated with customer details and a reference ticket ID regarding EDD miss. Mallika asked for the same details again. Eventually redirected to the right team but cx cancelled the order. AOI — Should have understood urgency and called the cx immediately to seek time. Store felt the escalation team could not help them."},
      {query:"Detractor call — pendant hoop size issue", score:83, comment:"Cx gave a detractor rating for the pendant hoop being smaller. Mallika apologised and pitched an exchange. Good work on the resolution — but overall handling could be better. Also noted: it is an NPS detractor feedback, not a Google review."}
    ],
    paramCaseMap:{ss:[1], sol:[3], prob:[], fu:[], tag:[]}
  },

  kruti: {
    name:"Kruti_P", initials:"KP", color:"#2563eb",
    cq:29, audits:7, ncf:5, totalErrors:13,
    params:{ss:0, sol:5, prob:0, fu:3, tag:1},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Incorrect information given and no ownership on resolution — across multiple cases, Kruti denied feasible solutions without checking with leadership, failed to pass on resolutions shared internally by Shrutiji, and either did not reply to the store at all or marked tickets incorrectly. As a senior, every reply must be accurate and ownership must not be outsourced to the store or cx."},
      {cat:"fu", label:"Follow Up", text:"No call on Ameyo despite stating you will call — across two cases, Kruti mentioned calling the cx but no record exists on Ameyo. Dropping a WhatsApp after an unanswered call and replying to the store with call outcome is mandatory. Pvt note with RNR is not a substitute for genuine follow-up."},
      {cat:"tag", label:"Tagging", text:"LinkedIn cases must be actioned within working hours — the team's shift is 9–9. Replying at 8am the next day for cases that arrived at 7:20pm–7:33pm sets a false expectation and per management's decision, these are NCFs. LinkedIn cases must be monitored and actioned within the shift."}
    ],
    cases:[
      {query:"Store escalation — delivery resolved", score:100, comment:"Good work!! Concerned team added, product delivered as requested. AOI — Drop an email to seek further assistance and confirm closure of the issue."},
      {query:"Store escalation — incorrect info on offer/size, NCF", score:0, comment:"Store sought guidance on a ₹2.5L order where the delivered 2.2-size ring was loose due to design. Cx requested 2.0 size. Order was under 100% off on making charges, offer had expired. Kruti denied possibilities and said to check tomorrow. Internally Shrutiji shared the resolution — which Kruti failed to pass on. Incorrect reply, unnecessary response count, senior-level NCF. Order was not invoiced and the exception via Oneview or RBM route was feasible."},
      {query:"Store escalation — closure follow-up", score:100, comment:"Good work!! AOI — Please pitch for closure and further assistance to the store once the case appears resolved."},
      {query:"Store escalation — mismatched earrings, no Ameyo call, NCF", score:0, comment:"Store reached out to initiate a repair for uninvoiced mismatched earrings. Kruti said she would call the cx — but no call found on Ameyo. Pvt note shows RNR via Oneview. Should have dropped a WhatsApp, replied to the store with call outcome, and asked for a convenient callback time. Tagged internally. NCF per management direction."},
      {query:"LinkedIn — missed escalation, Prateek Agrawal, NCF", score:0, comment:"LinkedIn case completely missed. No reply even the next day at 8am unlike other cases. NCF per management discussion."},
      {query:"LinkedIn — Amit Malik, delay delivery, NCF", score:0, comment:"LinkedIn case arrived at 7:20pm. Replied next morning at 8am — false expectation as team shift is 9–9. Person was also on leave. No self-ownership, should have raised a ticket and shared the ID with the cx. NCF per management direction."},
      {query:"LinkedIn — Tanishka Choudhary, repair charges, NCF", score:0, comment:"LinkedIn case arrived at 7:33pm. Replied next morning at 8am — same issue as above. Should have educated cx about standard OOW repair charges for a 2023 order. NCF per management direction."}
    ],
    paramCaseMap:{ss:[], sol:[1,3,4,5,6], prob:[], fu:[3,4,5], tag:[4,5,6]}
  },

  ajmal: {
    name:"Ajmal_A", initials:"AA", color:"#dc2626",
    cq:73, audits:5, ncf:1, totalErrors:4,
    note:"Ajmal is on notice period — 5 audits only. 1 NCF recorded.",
    params:{ss:1, sol:1, prob:0, fu:2, tag:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Social media escalations require same-day response — the LinkedIn case where the cx had escalated about a delayed order received no reply from Ajmal despite the update being available. Social media NCFs directly damage brand reputation and are held to the highest response standard."},
      {cat:"ss", label:"Soft Skills", text:"Gender awareness on calls — in the store escalation, Ajmal addressed the cx as 'sir' despite it being a female speaking. Being attentive to gender on calls is a basic soft-skill expectation."},
      {cat:"fu", label:"Follow Up", text:"Closure follow-up after resolution is now mandatory — as discussed in the last feedback session, a closure message to the store or cx after the issue appears resolved is required. This was missed in one case. Avoid leaving resolved cases open without a closure note."}
    ],
    cases:[
      {query:"LinkedIn — delay delivery, no reply, NCF", score:0, comment:"Cx had escalated on LinkedIn for a delayed order and delivery. Ajmal failed to revert to the cx despite the update being available. NCF under social media response standard."},
      {query:"Store escalation — concerned team added", score:100, comment:"Good work!! Concerned team added."},
      {query:"Store escalation — addressed cx as sir (female), SS error", score:75, comment:"Cx was unable to pickup the store-delivered order and wanted to return a product. Ajmal covered both points and acknowledged cx preference. AOI — Kept addressing the cx as 'sir' but the cx was female. Should be more attentive on call."},
      {query:"Store escalation — no closure follow-up", score:88, comment:"Good work on the resolution. AOI — Failed to do a closure follow-up. As discussed in the last feedback session, this was mandatory."},
      {query:"Store escalation — POP/TC payment", score:100, comment:"Cx made payment 3 times for POP/Treasure Chest. Required process followed."}
    ],
    paramCaseMap:{ss:[2], sol:[0], prob:[], fu:[0,3], tag:[]}
  },

  ankita: {
    name:"Ankita_R", initials:"AR", color:"#7c3aed",
    cq:57, audits:7, ncf:2, totalErrors:5,
    params:{ss:1, sol:2, prob:0, fu:1, tag:1},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Take end-to-end ownership on escalations — in the RCA case (8-month LinkedIn escalation), Ankita responded with 'we shall look into it if the cx escalates' in Sep 2025 and failed to make a committed callback in April 2026. Escalation ownership requires initiating contact with the cx within the same business day, documenting all callback attempts, and not passing back to the store unless there is genuine resolution."},
      {cat:"tag", label:"Tagging", text:"Check and tag the correct cx tier — in the store escalation, the cx was a Crown customer but was tagged as Regal. Tagging accuracy determines the SLA and priority treatment. Always verify cx tier on Oneview before tagging."},
      {cat:"ss", label:"Soft Skills", text:"Use the right ownership phrase on detractor calls — when a cx asked Ankita to address a JC's behaviour, saying 'I cannot' is not acceptable. The correct approach is to assure the cx that the feedback will reach a regional head and result in retraining. The phrase must convey ownership and accountability without overcommitting."},
      {cat:"fu", label:"Follow Up", text:"Check cx profile before calling a detractor — Ankita called a cx for a detractor callback without checking that another executive (Shabeena) had already spoken to the same cx the same day. This led to the cx being irate, repeating themselves, and eventually disconnecting. Always check Oneview for recent interactions before placing a detractor call."}
    ],
    cases:[
      {query:"Store escalation — crown cx tagged as Regal", score:75, comment:"Store flagged a cx who was repeatedly cancelling and returning orders. Ankita asked for clarification which the store didn't revert to. Ankita tagged the cx as Regal — the cx was actually a Crown customer. AOI — Tagging markdown applied."},
      {query:"Detractor call — ownership phrase, tagging NCF", score:0, comment:"Detractor call: tone was calm and well-set, but when cx asked to address the JC's behaviour, Ankita replied 'I cannot'. Should have assured the cx that regional head will hear the feedback and take action. Detractor sheet left tagging blank — reason, sub-reason, and feedback not filled. NCF on tagging."},
      {query:"Detractor call — did not check Oneview, cx irate", score:25, comment:"Called cx for detractor follow-up without checking Oneview — another executive (Shabeena) had already spoken to the cx the same day. Cx became irate, made to repeat, and disconnected. AOI — Always check cx profile before placing a detractor call. Ticket status should have been 'pending' not 'yes' since the call dropped mid-way. Columns Q–V left blank."},
      {query:"Store escalation — good work", score:100, comment:"Good work!! Cx appreciated, proper follow-up maintained throughout."},
      {query:"Store escalation — good work", score:100, comment:"Good work!! Cx appreciated, proper follow-up maintained throughout."},
      {query:"Twitter/X escalation — self-ownership", score:100, comment:"Escalation case. Good work taking self-ownership and resolving it. Cx appreciated too. Just ensure you keep a follow-up once cx picks the product."},
      {query:"LinkedIn — RCA case, 8-month escalation, NCF", score:0, comment:"Management-highlighted RCA case. In Sep 2025, Ankita responded to a store-flagged escalation with 'We shall look into it if the cx escalates' — reactive and dismissive. In April 2026 (Twitter), asked for 24–48 hours but made no callback and passed back to the store. Failed end-to-end ownership across 8 months. NCF — no proactive callback, no documented follow-through, repeated passive handoff to store."}
    ],
    paramCaseMap:{ss:[1], sol:[1,6], prob:[], fu:[2], tag:[0]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", fu:"Follow Up", tag:"Tagging"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", fu:"#16a34a", tag:"#7c3aed"};
