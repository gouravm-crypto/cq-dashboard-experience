const AGENTS = {
  kruti: {
    name:"Kruti_P", initials:"KP", color:"#c8a846",
    cq:88, audits:12, ncf:0, totalErrors:10,
    params:{ss:4, sol:2, prob:4, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Tone and positive phrasing — when cx was unhappy about collection or staff behaviour, responses felt scripted. Use warmer, personalised language to make the cx feel heard before moving to resolution."},
      {cat:"prob", label:"Probing", text:"Probing for complete understanding — missed probing what specifically the cx disliked (staff behaviour vs product vs process) before jumping to assurance. Asking the right question avoids incorrect redirection."},
      {cat:"sol", label:"Solution", text:"Solution completeness — in two cases the resolution shared was incomplete or lacked context. Always confirm what the cx needs before offering a solution, and share all relevant next steps in one go."}
    ],
    cases:[
      {query:"Unhappy with process / staff behaviour", score:100, comment:"Cx rated 1 and informed he was asked to take 14 size in urgency and asked to exchange as his wife size was 12 but cx reached after 15 days due to emergency. Consultant checked for options and raised exchange request. Good handling."},
      {query:"Store complaint — staff behaviour / less collection", score:63, comment:"Cx rated 5 as collection was less and store staff did not treat well. AOI — probe what specifically bothered cx — staff behaviour or collection — before addressing both together. Solution was incomplete."},
      {query:"Unhappy cx — high making charges", score:88, comment:"Cx felt the making charges were high and rated 1. Consultant tried to explain. AOI — when cx immediately asked a follow-up question, consultant spoke about offer instead of answering directly. Listen first."},
      {query:"CL TAH BLR KOR — miscommunication on invoice", score:100, comment:"Cx rated 1 as price breakup shared 2 days later did not match info shared while purchasing. Consultant checked and escalated. Good resolution."},
      {query:"Store feedback — felt collection less in range", score:78, comment:"Cx rated 1 as high-range products were mostly available. AOI — tone was flat; more empathy needed. Missed probing what specific range cx was looking for before redirecting."},
      {query:"Store complaint (Hisar) — unpleasant staff experience", score:88, comment:"Cx rated 4 as staff at Hisar store were unprofessional. AOI — too monotonous in delivery. Use more warmth when acknowledging repeated poor store experiences."},
      {query:"Store complaint (Ranchi) — no proactive info", score:88, comment:"Cx opted home delivery but store placed store pickup order. Consultant called and cx promised to call back. AOI — sounded casual when cx was clearly unhappy. Tone needs to convey urgency."},
      {query:"Rating 0 by mistake — changed rating to 10", score:100, comment:"Cx rated 0 so consultant called. Cx confirmed it was a gift and did not rate 0. Consultant probed and cx rated 10. Good work."},
      {query:"Store complaint (Sarjapur Road) — miscommunication", score:100, comment:"Cx rated 1. Consultant probed reason. Cx mentioned she shared everything on chat. Consultant clarified the email confusion. Good handling."},
      {query:"Store staff gave incorrect info — informed 18kt sold 14kt", score:100, comment:"Cx rated 1 as he was told 18kt and sold 14kt. Consultant mentioned she will check. Cx disconnected. Checking with consultant for follow up."},
      {query:"Store complaint (South City Mall) — disinterested staff", score:83, comment:"Cx rated 1. OGE took longer time, sales person was disinterested. AOI — could have proactively shared that POP enrolment is possible online to make it hassle-free for cx."},
      {query:"Store complaint (Nexus Shantiniketan) — ignored by staff", score:66, comment:"Cx rated 0 as she was being ignored at store, cleaning denied and OGE not helped. AOI — avoid using filler words. Probe more specifically on what assistance cx needed at store."}
    ],
    paramCaseMap:{ss:[4,5,6,11], sol:[1,10], prob:[1,2,4,11], tag:[], fu:[]}
  },
  gourav: {
    name:"Gourav_M", initials:"GM", color:"#16a34a",
    cq:87, audits:12, ncf:0, totalErrors:11,
    params:{ss:5, sol:1, prob:5, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Positive acknowledgement and rapport — when cx rated 10, consultant responded 'it was kind of him to rate 10' instead of a warm positive phrase like 'we are glad you liked our service'. Build on positive moments."},
      {cat:"prob", label:"Probing", text:"Rating conversion probing — in multiple cases where cx gave a mid-range rating (8, 9) and was satisfied, consultant missed probing to convert to a 10. Always probe for rating improvement when cx is happy."},
      {cat:"sol", label:"Solution", text:"Solution confirmation — in one case where cx asked to share designs on WhatsApp, consultant confirmed but should have also shared a timeline and set expectation on follow-up."}
    ],
    cases:[
      {query:"Repair feedback — happy cx", score:88, comment:"Cx rated 10 for repair team. Consultant checked if product was fixed. AOI — lack of probing on feedback on product post repair. Could have asked cx to share their experience with the repair quality."},
      {query:"Solitaire feedback — satisfied", score:100, comment:"Cx was satisfied with solitaire purchase and rated 8 or 9 and disconnected. Well handled."},
      {query:"Digi Gold — OB activity", score:88, comment:"Cx was happy with CL Digi Gold. Consultant shared benefit and discount. AOI — rating not probed. Always probe for rating when cx is happy."},
      {query:"Repair feedback — happy cx", score:88, comment:"Cx happy with repair and rated 10. Consultant responded 'it was kind of him to rate 10'. AOI — positive acknowledgement needed. Eg: 'we are glad you liked our service and will share feedback with the team'."},
      {query:"Store complaint — unable to use anniversary coupon", score:91, comment:"Consultant called and empathized about anniversary coupon issue. Date mentioned was wrong. Consultant probed for proof and escalated. Good empathy shown."},
      {query:"Shaya complaint — quality, cost, multiple returns", score:75, comment:"Cx rated 1 for shaya purchase as quality was bad, faded and bent easily. Multiple returns. AOI — cx mentioned multiple specific issues, consultant should have addressed each point individually with care and ownership."},
      {query:"Solitaire feedback — cx unresponsive / disconnected", score:88, comment:"Cx rated 8 and disconnected. AOI — engage with cx by rephrasing their name instead of long pauses. Keep cx engaged before they disconnect."},
      {query:"Solitaire feedback — happy cx, did not rate", score:100, comment:"Cx was happy with solitaire purchase and did not rate as it was a gift. Good handling."},
      {query:"Store bday celeb call — store denied cx", score:100, comment:"Consultant checked if GWD was credited. Cx confirmed she shared issue multiple times. Consultant acknowledged and escalated. Good work."},
      {query:"Product quality — colour changed, not happy", score:75, comment:"Cx unhappy as white gold faded and diamond shine went off. Store polished but same issue. Consultant acknowledged and offered exchange. AOI — missed probing on how long cx had the product and prior repair history."},
      {query:"Unhappy — live size of product smaller than expected", score:75, comment:"Cx rated 6 as earing size was small vs online images. Consultant suggested exchange and confirmed designs on WhatsApp. AOI — should have confirmed timeline for WhatsApp follow up and set expectation."},
      {query:"Rating 0 by mistake — changed to 9", score:78, comment:"Cx gave 0 so consultant called. Cx wanted to change to 9. AOI — failed to probe if the issue was resolved to convert to a higher rating."}
    ],
    paramCaseMap:{ss:[3,4,5,6,11], sol:[10], prob:[0,2,9,10,11], tag:[], fu:[]}
  },
  ankita: {
    name:"Ankita_R", initials:"AR", color:"#2563eb",
    cq:86, audits:12, ncf:0, totalErrors:9,
    params:{ss:5, sol:0, prob:4, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Scripted responses when cx is emotionally upset — when cx had a damaged product on engagement day, the response felt procedural. Acknowledge the occasion and the emotional impact before offering resolution."},
      {cat:"prob", label:"Probing", text:"Probing to convert rating — in cases where cx gave a mid-range rating and there were no pending issues, consultant missed asking cx to consider rating higher. Always probe for rating conversion when cx is satisfied."},
      {cat:"ss", label:"Soft Skills", text:"Tone and monotony — in two store complaint cases, responses sounded monotonous. Vary tone and pace to convey genuine empathy, especially when cx is clearly frustrated."}
    ],
    cases:[
      {query:"Unhappy cx — refund issue", score:88, comment:"Cx rated 1 as there was a refund discussion ongoing and she will call back if required. AOI — could probe what specific update cx needed on refund to give a more complete response."},
      {query:"Repair complaint — 2nd time repair, same issue", score:75, comment:"Cx rated 8 for repair as same issue repeated in 2nd repair. Consultant checked what issue happened. AOI — should have probed why the same issue repeated and escalated to repair quality team."},
      {query:"Repair feedback — not happy with finish after repair", score:100, comment:"Cx was ok with repair and rated 7 as diamond fixed after repair does not look the same. Consultant checked for images to explore possibilities. Good handling."},
      {query:"TAH feedback — rating changed", score:100, comment:"Cx rated 8 for TAH service. Consultant rephrased 'if you would consider changing the rating to 9 or 10'. Good positive probing."},
      {query:"Product complaint — damaged product on delivery, engagement nearby", score:56, comment:"Dent on ring when cx went to pick and her engagement date was nearby, new ring could not be delivered. AOI — interruption noticed, cx was rushed. Should have acknowledged the occasion first before checking options."},
      {query:"No feedback — 8 rating for clive service", score:88, comment:"Cx rated 8 for video call service. AOI — as everything was good, consultant could have probed to convert the 8 rating to a 9 or 10."},
      {query:"Store complaint — incorrect billing done", score:88, comment:"Cx rated 0 as wrong product was billed and store team called next day asking to pay additional amount. AOI — 'we will try to improvise and work on it' is a scripted phrase. Use more specific and reassuring language."},
      {query:"Store complaint — longer time taken by store", score:88, comment:"Cx gave 6 rating as longer time was taken for billing. AOI — sounding monotonous. Use vocal variety and more empathetic phrasing when cx is clearly dissatisfied."},
      {query:"Store complaint — unhappy with JC forcing POP", score:63, comment:"Cx was unhappy with sales representative pitching POP with wrong promises. Consultant assured to escalate. AOI — failed to probe what was incorrectly promised so the escalation could be specific."},
      {query:"Rating 0 by mistake — changed rating to 10", score:100, comment:"Cx mentioned 1 rating was given by mistake. Consultant probed, cx rated 10. Good work."},
      {query:"Store complaint — incorrect ph number updated", score:88, comment:"Cx gave 1 rating as incorrect contact number was mentioned by store. AOI — when cx was sharing the complaint, 'ok' was replied — sounded casual. Use acknowledgement phrases instead."},
      {query:"Rating 0 by mistake — changed rating to 9", score:100, comment:"Cx rated 0 so consultant called. Cx confirmed 0 rating was not given intentionally. Consultant probed for rating. Cx rated 9. Good work."}
    ],
    paramCaseMap:{ss:[0,4,6,7,10], sol:[], prob:[1,4,5,8], tag:[], fu:[]}
  },
  tisha: {
    name:"Tisha_J", initials:"TJ", color:"#7c3aed",
    cq:84, audits:12, ncf:0, totalErrors:8,
    params:{ss:3, sol:1, prob:4, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Avoid assumptions — in the size exchange case, consultant told cx she sent wrong size when cx had not mentioned that. Always confirm facts before making a statement to avoid embarrassing cx."},
      {cat:"prob", label:"Probing", text:"Probing before offering solution — in product complaints, consultant jumped to asking for images without first checking if the purchase was online or in-store, leading to an incorrect first response."},
      {cat:"sol", label:"Solution", text:"Complete information before resolution — in one case cx was told a product would go under LTE only after exchange was suggested. All policy checks should be done before offering a solution to avoid reversals."}
    ],
    cases:[
      {query:"Size issue — exchange order placed", score:56, comment:"Cx rated 1 as she had issue with delivered order and got it exchanged at store. AOI — cx nowhere mentioned wrong size was sent, consultant corrected this which was incorrect. Confirm before stating facts."},
      {query:"Store complaint (Jamshedpur) — arrogant staff", score:88, comment:"Cx was unhappy with store service and felt store was not welcoming and person was arrogant. AOI — sounded monotonous in delivery. Use vocal variety to convey genuine empathy."},
      {query:"Repair feedback — 8 rating", score:100, comment:"Cx was happy with repair and rated 8. Confirmed everything was fine but not willing to change the rating. Consultant handled gracefully."},
      {query:"Store feedback — rating changed from detractor", score:100, comment:"Cx rated 5 earlier and confirmed she got call from store and was later happy. Cx rated 10. Good escalation and follow-through."},
      {query:"Unhappy cx / valentines gift — defective product", score:75, comment:"Cx rated 1 as she received defective product. Consultant empathized and checked if online purchase and pickup was done. AOI — should have probed if cx had already contacted the store before offering next steps."},
      {query:"Product size — live size small vs images", score:63, comment:"Cx rated 0 as product size was very small compared to online images. Consultant empathized and mentioned feedback to put real images. AOI — should have offered LTE and confirmed details before cx disconnected. Solution offered too late."},
      {query:"Incorrect info by store — rhodium polish and diamond", score:100, comment:"Cx was given incorrect info about rhodium polish and diamond by store staff and then no MB option. Cx was unhappy. Consultant escalated appropriately. Good handling."},
      {query:"TAH no feedback — 8 rating", score:100, comment:"Cx rated 8 for TAH and purchased order and disconnected. Good handling."},
      {query:"Product quality — diamond fell within 5 days", score:75, comment:"Within 5 days diamond fell off so cx exchanged and gave lesser rating. AOI — cx was unsure of 2nd product quality — should have escalated to quality team and reassured cx proactively."},
      {query:"Product complaint — screw missing", score:67, comment:"Cx rated 4 as there was no screw in any of the earrings. Consultant asked for images on WhatsApp. AOI — cx purchased multiple items, should have probed if all earrings had the issue before directing to store."},
      {query:"Product complaint — defective delivery, paid extra", score:83, comment:"Cx rated 0 as bracelet had defect and cx had to follow up multiple times and pay extra. Consultant requested images. Good empathy shown."},
      {query:"Rating 0 by mistake — changed to 10", score:100, comment:"Cx rated 0 on call and changed rating to 10. Consultant handled well."}
    ],
    paramCaseMap:{ss:[0,1,8], sol:[5], prob:[0,4,5,9], tag:[], fu:[]}
  },
  sayoni: {
    name:"Sayoni_P", initials:"SP", color:"#ea580c",
    cq:80, audits:12, ncf:0, totalErrors:14,
    params:{ss:7, sol:1, prob:5, tag:0, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Tone and warmth — in multiple cases, tone was flat and delivery lacked urgency. When cx is upset about a specific incident (store complaint, engraving issue), the response should convey that you genuinely care, not just acknowledge."},
      {cat:"prob", label:"Probing", text:"Irrelevant probing — in 2 cases, probing done was not relevant to the complaint (asking about circular ring when cx had already exchanged, asking about store pressure when cx did not mention it). Probe only what is relevant to the resolution."},
      {cat:"fu", label:"Follow Up", text:"Follow up commitment — in the MB policy case, consultant informed cx about the policy but did not confirm a follow-up or escalation path. Always close the loop with a specific next step and timeline."}
    ],
    cases:[
      {query:"Shaya complaint — damaged product / not in shrink wrap", score:78, comment:"Cx rated 5 as silver dia was bent and lamp was not in shrink wrap. Consultant empathized and requested images. AOI — tone was not assertive enough when cx was clearly dissatisfied with packaging quality."},
      {query:"Product complaint — broke after delivery", score:100, comment:"Cx rated 1 as chain broke while wearing after delivery. Consultant checked purchase date and raised escalation. Good handling."},
      {query:"Rated 5 — less options in customization", score:77, comment:"Cx rated 5 as customization options were less. Cx asked to call back. AOI — voice was unclear and could have probed more on what customization cx was specifically looking for."},
      {query:"Uncomfortable earring — offered exchange", score:60, comment:"Uncomfortable earrings. Consultant suggested exchange and then informed it would go under LTE as it was exchanged already. AOI — check all details and policy before offering exchange to avoid reversals that frustrate cx."},
      {query:"Store complaint — not happy with store cleanliness and staff", score:85, comment:"Store complaint — not happy with store cleanliness and staff at Bakerganj, Patna. AOI — consultant did not acknowledge the staff-related complaint specifically. Both issues needed separate acknowledgement."},
      {query:"Product quality issue (colour) — exchanged", score:83, comment:"Cx rated 0 as colour faded so cx exchanged. AOI — irrelevant asking about circular ring when there was already an exchange in previous order. Use history before probing."},
      {query:"Store MB policy — unhappy cx", score:78, comment:"Cx called about returning a store order which is not possible per policy. Cx mentioned store did not inform. Consultant explained policy. AOI — missed probing what exactly the store told cx and failed to confirm follow-up."},
      {query:"Store complaint — replacement provided", score:100, comment:"Recent purchase had issue, store initially denied and later accepted and exchanged. Consultant empathized and acknowledged. Good handling."},
      {query:"Engraving complaint — product delivered without engraving", score:69, comment:"Cx rated 5 as product came without engraving. Cx confirmed images already sent and in progress. AOI — consultant asked cx to get in touch with store without first checking status of engraving complaint."},
      {query:"Rating 0 by mistake — changed to 8", score:81, comment:"Cx rated 0 by mistake. Consultant probed if she was happy. Cx rated 8. AOI — could have probed to convert to a 9 or 10 since cx was happy."},
      {query:"Unhappy with store policy — no MB at store", score:73, comment:"Cx was unhappy with stoppage of MB on store orders and was not aware of the policy. AOI — consultant did not probe on what the cx was specifically told by the store before explaining policy."},
      {query:"Unable to use multiple discount — coupon + offer conflict", score:75, comment:"Cx was unhappy that coupon could not be used due to ongoing offer and felt it was a scam. AOI — tone needed more warmth upfront when cx was already using strong language."}
    ],
    paramCaseMap:{ss:[0,2,4,6,8,9,11], sol:[3], prob:[0,2,5,8,10], tag:[], fu:[6]}
  },
  pratiksha: {
    name:"Pratiksha_K", initials:"PK", color:"#dc2626",
    cq:78, audits:12, ncf:0, totalErrors:17,
    params:{ss:10, sol:1, prob:6, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Tone, stammering and scripted phrases — multiple audits flagged stammering and monotonous delivery. When cx is sharing an emotional or repeated complaint, a confident and composed tone builds trust. Practice delivery on difficult cx scenarios."},
      {cat:"prob", label:"Probing", text:"Irrelevant probing — in multiple cases, questions asked were not relevant to the complaint or cx had already given the answer earlier. Always listen to what cx says before probing. Re-asking information cx already shared signals poor listening."},
      {cat:"sol", label:"Solution", text:"Resolution ownership — in one case cx was unhappy with the resolution provided and escalation was needed. Always confirm cx's expectation before offering a resolution, and take full ownership of the outcome rather than redirecting immediately."}
    ],
    cases:[
      {query:"Unhappy with policy — wanted to use XP and coupon with POP", score:70, comment:"Cx rated 6 as she was unable to use XP and coupon in the order along with POP. AOI — consultant failed to understand the query and probed repeatedly, cx kept the call on hold and disconnected."},
      {query:"Detractor — high making charges", score:78, comment:"Cx rated 4 as she felt making charges were high. Consultant explained. AOI — irrelevant asking 'can she explain' when cx had already explained. Listen more carefully before re-probing."},
      {query:"Shaya complaint — unhappy with quality", score:75, comment:"Cx unhappy with shaya product quality. AOI — asking for images was irrelevant as complaint was a quality issue that cx had already described. Avoid using generic probing that does not apply to the situation."},
      {query:"Shaya complaint — product quality / damaged screw", score:78, comment:"Cx rated 3 as she did not like the shaya earrings quality as she was unable to open the screw. AOI — consultant used script to work on the complaint. Too scripted — use cx's own words to acknowledge and respond."},
      {query:"Product quality colour changed — unhappy with resolution", score:60, comment:"Cx was unhappy with the resolution provided as full value exchange was offered but cx felt it was a loss. Later Gaurav handled with exceptional approval. AOI — always confirm cx's expectation before offering resolution."},
      {query:"Store complaint (Patiala) — less collection", score:75, comment:"Cx rated 5 as collection was less and product was MTO. Consultant informed all products cannot be kept and suggested TAH. AOI — tone was flat and lacked warmth when cx was clearly frustrated about limited options."},
      {query:"Multiple complaint — repair process (TAT)", score:88, comment:"Cx was happy with repair timeline but unhappy with call being recorded without consent and extra charges. AOI — too much stammering throughout the call. Compose yourself before responding to complex complaints."},
      {query:"Store staff complaint (South Ex) — cx not given importance", score:88, comment:"Cx gave 2 rating as store staff left cx in between for a regular cx. Cx felt not given importance. AOI — positive phrases needed. Every customer is equally important — use language that reinforces this."},
      {query:"Store complaint (Indiranagar) — multiple agents, different resolutions", score:100, comment:"Cx rated 5 as multiple agents gave different resolutions and devices were not working. Consultant escalated. Good handling."},
      {query:"Product quality — ring too thin", score:78, comment:"Cx rated 6 as ring is too thin. Consultant said ok. Cx asked to cancel return and keep product. AOI — 'ok' is not an acknowledgement. Use empathetic phrases before probing. Cx wanted to keep product but was not encouraged."},
      {query:"Store complaint (Traffic Park Road Nagpur) — less variety", score:75, comment:"Cx gave 2 rating as collection at store was limited. Consultant empathized and mentioned all designs cannot be kept at store. AOI — could have actively offered a TAH session to show more designs."},
      {query:"Gift box requirement — Amazon gift offer shared", score:70, comment:"Cx requested gift box on Insta. Consultant mentioned we don't give gift boxes to all customers and offered Amazon gift card. AOI — tone was dismissive. The response should convey that we value cx's request before explaining the policy."}
    ],
    paramCaseMap:{ss:[0,1,3,4,5,6,7,9,10,11], sol:[4], prob:[1,2,3,4,9,11], tag:[], fu:[]}
  },
  saakshi: {
    name:"Saakshi_S", initials:"SS", color:"#7c3aed",
    cq:77, audits:12, ncf:0, totalErrors:13,
    params:{ss:5, sol:2, prob:6, tag:0, fu:0},
    aois:[
      {cat:"prob", label:"Probing", text:"Probing relevance and timing — in multiple cases, probing was either done too early (before acknowledging cx), too late, or was irrelevant to the complaint. Always acknowledge first, then probe specifically for what you need to resolve the issue."},
      {cat:"ss", label:"Soft Skills", text:"Acknowledgement of positive feedback — when cx shared something good, consultant missed acknowledging it before moving on. Recognising positive feedback builds rapport and makes cx feel valued."},
      {cat:"sol", label:"Solution", text:"Resolution completeness — in two cases the solution offered was incomplete or cx had to follow up for the same issue. Confirm all resolution steps with cx before closing and check if cx has any remaining concerns."}
    ],
    cases:[
      {query:"Detractor call — no update", score:100, comment:"Cx rated 2 so consultant called, cx asked to call back. No update from cx. Handled appropriately."},
      {query:"Store purchase — price drop after purchase", score:63, comment:"Cx rated 4 as size issue caused re-order and there was a price change on the day of re-order. AOI — missed probing on whether the price change was communicated to cx before re-order. Solution shared was incomplete."},
      {query:"Store feedback — less collection", score:88, comment:"Cx gave 4 rating to store as she felt collection was less, rest everything was great. AOI — no acknowledgement on positive feedback given by cx before addressing the concern."},
      {query:"Product complaint — product delivered without engraving twice", score:78, comment:"Cx rated 6 as product was sent without engraving twice. Consultant empathized and probed to get it engraved. AOI — cx confirmed later and then changed mind. Should have locked in commitment before moving on."},
      {query:"Product feedback — no feedback, asked to give higher rating", score:22, comment:"Cx asked to give higher rating — consultant failed to understand the request. AOI — long pause followed. Check all details and prepare before calling cx. Return was raised for the product which was not in the call context."},
      {query:"Lack of proactive update on product availability", score:100, comment:"Cx rated 5 and was unhappy with store as there was lack of proactive info and cx had to follow up. Consultant empathized and raised escalation. Good handling."},
      {query:"Unhappy with less collection — OMR store", score:69, comment:"Cx was unhappy as she felt collection was less at OMR store. AOI — avoid using filler phrases that do not add value to the conversation. Probing done was not targeted enough."},
      {query:"Store pressuring to enroll in POP — not interested", score:75, comment:"Cx rated 6 as store sales person was pressurising to enrol POP multiple times. AOI — avoid proactively asking what store would have pressured on — this can put cx in an awkward position."},
      {query:"Resolved issue / happy cx — exceptional 2nd exchange", score:75, comment:"Cx confirmed she already exchanged 2nd time exceptionally and issue was resolved. Cx was happy — rating change was not probed. Always probe for rating conversion when cx confirms resolution."},
      {query:"Payment charged twice — lack of proactive update", score:78, comment:"Cx rated 4 for store as there was a payment issue and cx realised 4 days later and had to escalate. AOI — consultant missed probing on whether cx had contacted the store before calling us."},
      {query:"Incorrect invoice shared initially", score:75, comment:"Cx had not received the correct bill and rated 0 but confirmed correct details were received recently. AOI — rating change could have been probed as cx said he was satisfied with resolution."},
      {query:"TAH no feedback — 8 rating", score:100, comment:"Cx rated 8 for TAH service and had no feedback. Consultant probed to convert rating, cx disconnected. Good probing attempt."}
    ],
    paramCaseMap:{ss:[2,3,4,6,9], sol:[1,3], prob:[1,4,6,7,8,10], tag:[], fu:[]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
