const AGENTS = {
  kruti: {
    name:"Kruti_P", initials:"KP", color:"#2563eb",
    cq:96, audits:5, ncf:0, totalErrors:2,
    note:"Kruti's CQ has climbed sharply this month, from 29% in June to 96% in July. Consistent, clean handling across almost every escalation this month.",
    params:{ss:0, sol:0, prob:0, fu:0, tag:2, cc:0},
    aois:[
      {cat:"tag", label:"Tagging", text:"Match the disposition and tag to what the customer actually reported, not to the option that looks closest. On both flagged cases this month, the tag chosen did not match the customer's own description of the issue. A quick reread of the customer's message before closing avoids this."}
    ],
    cases:[
      {query:"Store escalation, quick and clean resolution", score:100, comment:"Good work, no issues found."},
      {query:"Store escalation, timely handling", score:100, comment:"Good work, handled cleanly with no delays."},
      {query:"Store escalation, timely handling", score:100, comment:"Good work, handled cleanly with no delays."},
      {query:"Store escalation, engraving versus broken product", score:88, comment:"Good retention effort on this one. The only miss was the disposition selected, engraving issue was chosen, but the customer's email clearly described the product as broken. Please match the disposition to what the customer actually reported."},
      {query:"Store escalation, tagging accuracy", score:94, comment:"Good work overall. Tagging needs a small correction to match the actual case type going forward."}
    ],
    paramCaseMap:{ss:[], sol:[], prob:[], fu:[], tag:[3,4], cc:[]}
  },
  tisha: {
    name:"Tisha_J", initials:"TJ", color:"#c8a846",
    cq:93, audits:5, ncf:0, totalErrors:1,
    note:"Tisha's CQ has improved well this month, from 48% in June to 93% in July.",
    params:{ss:0, sol:1, prob:0, fu:0, tag:0, cc:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"When a customer callback is specifically requested, whether by the store or in the case notes, that call needs to happen. Speaking with the store alone does not close the loop for the customer waiting on the other end. Please follow through on direct callback commitments every time, even when the update itself has already been shared internally."}
    ],
    cases:[
      {query:"Store escalation, handled well", score:100, comment:"Good work, handled well with no issues."},
      {query:"Store escalation, reducing interaction count", score:100, comment:"Good work overall. A quicker way to cut down back and forth would be calling the store directly for details instead of going back and forth over email."},
      {query:"Store escalation, multiple teams coordinated", score:100, comment:"Good work overall. Please try to stick to one point of contact per escalation rather than looping in several internal emails, it keeps things cleaner for the other teams involved too."},
      {query:"Store escalation, missed customer callback", score:67, comment:"The store had asked for a call to the customer from head office, and this call was missed. Tisha did speak with the store and passed on the feedback, but the direct call to the customer never happened. Benefit of the doubt was given this time instead of marking it a non conformance, but this should not repeat."},
      {query:"Store escalation, refund status update", score:100, comment:"Good work, handled well with no issues."}
    ],
    paramCaseMap:{ss:[], sol:[3], prob:[], fu:[], tag:[], cc:[]}
  },
  ankita: {
    name:"Ankita_R", initials:"AR", color:"#7c3aed",
    cq:43, audits:6, ncf:2, totalErrors:13,
    note:"Ankita's CQ has dropped this month, from 57% in June to 43% in July, and both non conformances this month came from her cases. Tagging accuracy and ownership on refund related escalations are the main areas that need attention.",
    params:{ss:2, sol:4, prob:1, fu:1, tag:5, cc:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Do not move straight to a refund or exception without exploring alternatives first. Before approving anything, check whether a quality check, a full value exchange, or a replacement can resolve the case instead, and route any Oneview exception through the RM or RBM rather than approving it directly."},
      {cat:"tag", label:"Tagging", text:"Confirm the tag before closing a ticket. Several cases this month were closed under the wrong category, product broken instead of out of shape, delivery related instead of order status or cancellation. A quick recheck against the customer's actual issue avoids this."},
      {cat:"prob", label:"Probing", text:"Ask before assuming. On escalations where the customer sounds upset in the store's message, a short call to understand what actually happened builds trust faster and gives a clearer picture than relying only on the store's version of events."},
      {cat:"ss", label:"Soft Skills", text:"Read the full email chain before replying. A couple of escalations this month already had the answer sitting in the thread, an RM's name, a policy detail, and asking for it again slows the store down and reads as though the message wasn't read closely."}
    ],
    cases:[
      {query:"Store escalation, discolouration refund exception, re audited", score:13, comment:"This was a re audited case. Ankita told the store to raise a Oneview exception for a refund, but that kind of exception needs RM or RBM approval, not JC level approval. No retention effort was made, and a refund was agreed to immediately without offering a quality check, a full value exchange, or a replacement. The customer sounded upset in the store's message, yet no call was placed to understand the issue directly, and there is no call log on Ameyo or Oneview. The case was also tagged as product broken when the actual issue was discolouration. For someone with more than two years on the team, a call and a genuine retention attempt were expected here."},
      {query:"Store escalation, tagging correction needed", score:94, comment:"Good handling overall. The only miss was the tag, marked as product broken and non repairable when the issue was actually the product being out of shape. Please double check the tag category before closing a case like this."},
      {query:"Store escalation, general assistance", score:100, comment:"Handled well, no issues found."},
      {query:"Store escalation, order cancellation and refund", score:50, comment:"The escalation email had already named the RM, Manas Kapoor, for refund approval, but Ankita asked the store to check with their RM again, creating an unnecessary back and forth. The ticket was also tagged as delivery related when it was actually about order cancellation and refund. Please read the full email chain carefully before replying, the details are usually already there."},
      {query:"Store escalation, barcode and dispatch query, non conformance", score:0, comment:"The store only needed help with an order status update since a barcode was already assigned. Ankita added the buying team unnecessarily instead of reaching out to the store or support team directly, who were the right owners here. The ticket was also tagged as delivery related, even though the order had not even been dispatched yet, so it should have been tagged as an order status query. This has been marked as a non conformance."},
      {query:"Store escalation, repair charges dispute, non conformance", score:0, comment:"The store had reached out for help with a customer disputing repair charges, and all the information needed was already available in the email chain. Instead of passing this on to the outbound team or updating the store directly, Ankita replied only with a general offer to assist further, and the ticket was closed as internal while the customer's dispute remained unresolved. Please add the postsale outbound team in cases like this, or speak with them directly, and always note the details in private notes for visibility. This has been marked as a non conformance."}
    ],
    paramCaseMap:{ss:[0,3], sol:[0,3,4,5], prob:[0], fu:[5], tag:[0,1,3,4,5], cc:[]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", fu:"Follow Up", tag:"Tagging", cc:"Call/Chat Etiquette"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", fu:"#16a34a", tag:"#7c3aed", cc:"#0891b2"};
