# Task Skill

## Decision timing and contact evidence

- Choose each five-row call from the latest returned observation and actually executed rows. A new tactile change can affect the next call; it cannot trigger a different later row inside the current call.
- Contact evidence is a localized right-TacRGB structure relative to the recent open-finger image. A structure that remains present with little image change is retained contact. Compare its presence and evolution with measured pose and action history; identical images are not required.
- An empty sample is a completed closing attempt without that structure after its settling opportunity. Smooth imagery during open travel alone does not establish an empty sample. Current contact evidence overrides an earlier empty-sample or coverage-expansion plan.

## Phase transitions

### Phase 1: Enter with open fingers

- Primary objective: Lower the open gripper into the container's working region.
- Begin local search when: Measured height has fallen into the low probing region. Probing occurs around z≈0.02–0.035 m in these references; this is a reference range, not a universal depth gate. Begin a local open-finger pass as descent tapers, without waiting for zero pose change or for the object to become visible.
- Default behavior: Keep the fingers open, preserve the working orientation, and descend with local positioning adjustments. Use measured pose and recent executed actions, not accumulated requested targets.
- Exit or correction condition: If further downward requests produce little height change, begin lateral probing and reassess depth rather than waiting for an informative image.

### Phase 2: Search and actively sample right-finger contact

- Primary objective: Cover nearby untested placements while obtaining early right-finger tactile samples, rather than waiting for open-finger travel to reveal the hidden object.
- Begin a closing probe when: A deliberate open-finger reposition has produced measured motion toward the chosen local placement. Use the reached placement for a closing probe; no minimum travel distance or extra stationary block is required. The final taper of a local pass and the start of narrowing may share a call. If the latest image already contains contact evidence, retain that placement and use Phase 3.
- Default behavior: Open for relocation and preserve the working orientation. Use the demonstrated translation scales and recent passes that produced measured motion. After an empty sample, continue away from it along a direction that still produces travel, or shift to an adjacent lane when that region has already been sampled. Compare the returned XYZ to the last sampled position before choosing another pass. At the reached placement, apply the progressive closing probe in Phase 3 with small alignment corrections. The single finger target commands both fingers; right TacRGB provides the contact feedback.
- Search memory: Distinguish open-finger traversal from closing samples. Keep the recent empty samples' measured positions, heights, and requested finger targets. Judge relocation against where closing actually occurred, rather than the earlier open pose. A different depth or changed approach is a reason to revisit an XY location; an old empty sample is not a permanent exclusion.
- Exit or correction condition: An empty closing result selects another open-finger relocation. Two consecutive completed empty samples at the same working height select the depth comparison in Recovery. A pass with little measured travel selects the direction correction in Recovery. Current contact evidence immediately ends coverage expansion; no remaining search directions need to be completed.

### Phase 3: Close and establish contact

- Primary objective: Acquire a grasp and let finger contact settle before sustained ascent.
- Contact check for lifting: The latest image contains a contact structure from this attempt. Persistent structure supports a controlled lift even when its shape or measured EEF position is still changing; zero motion and identical images are not prerequisites.
- Default behavior: Narrow progressively while keeping EEF translation small and allowing alignment corrections. Demonstrations reduce per-finger targets from about 0.04 toward 0.025 m. Continue from the current requested opening instead of reopening to replay a ramp. Normally reach the chosen narrower target before the last row, leaving a final row or two at that target as translation tapers. A closing block with this tail already provides a settling opportunity.
- If no contact structure is visible at the returned observation: when narrowing reached its target only on the final executed row, allow one additional block to finish settling at that placement. If the closing block already included the settling tail, or the additional block has been used, reopen and relocate on the next call. Further tightening or tiny alignment changes at the same placement do not restart the settling allowance. The requested finger opening alone does not establish a grasp.
- If contact structure is visible at the returned observation: maintain the narrower target and plan the next call as a short hold or alignment transition followed by controlled ascent. If the feature has only just formed and is still changing with the closing attempt, one additional block may instead be used to settle it. This is the same single additional-block allowance, not a new waiting budget. At its next observation, persistent distinct contact selects ascent; absence of the structure selects reopening and local relocation. Change in a retained feature alone does not justify another stationary block.
- Exit or correction condition: These settling limits apply to initial acquisition at the current placement. Once ascent has begun, use Phase 4 retention and measured-rise guidance. A new closing-probe call without current contact evidence should finish narrowing and settling, then use the returned image for the lift decision. When contact is already visible, the short hold and lift are planned together from that observation, not from an imagined mid-call feedback check.

### Phase 4: Lift while retaining contact

- Primary objective: Raise the grasped object out of the container while maintaining the grasp.
- Observable transition condition: Increasing measured EEF height together with a persistent tactile structure supports continued lift progress. These demonstrations do not establish a separate terminal phase, fixed clearance height, or stopping count.
- Default behavior: Maintain the narrower finger command, begin upward motion, and continue predominantly vertical ascent with small positioning corrections while checking the tactile feature. Exact silhouette, projection count, or image centering is unnecessary.
- Exit or correction condition: If initial upward requests yield little measured rise but the contact feature remains, reassess pose and continue a controlled upward step. Do not mistake issued lift commands for achieved motion or completion.

## High-confidence priors

- Pattern: Translate during entry and search relocation with open fingers while largely preserving the working orientation.
- Applicable phase: 1 and the relocation part of 2; closing probes follow Phase 3.
- Evidence: All forty supplied initial blocks use open targets and zero rotation; official:0 windows 10–25 show descent giving way to low-height lateral probing.

- Pattern: Search uses lateral motion in multiple directions, with occasional open-finger upward repositioning; upward motion alone does not imply an object lift.
- Applicable phase: 2.
- Evidence: Direction changes recur in official:2 at 133, official:24 at 83, and official:45 at 63; open upward repositioning occurs in official:1 at 59, official:27 at 60, and official:46 at 74.

- Pattern: Narrowing can start from smooth tactile imagery; contact then develops during a near-level settling interval before ascent.
- Applicable phase: 2–3.
- Evidence: Contiguous official:6 windows 90–105 and official:3 windows 100–115 repeat progressive narrowing, appearance and development of tactile structure, then initial upward requests.

- Pattern: Maintain the narrower command during ascent and assess retention from tactile structure together with measured height change.
- Applicable phase: 4.
- Evidence: official:6 at 105 and official:3 at 115 show early ascent with retained structure; the forty supplied late blocks repeat this pattern at varied positions and heights.

## Recovery

- Observable anomaly: Two consecutive completed closing samples at the same working height remain empty, or closing returns to a recently empty measured placement despite a relocation request. Smooth tactile imagery during open travel alone does not trigger this correction.
- One minimal correction: For repeated empty samples at one height, include one modest open-finger downward adjustment toward a nearby placement. If recent downward requests already produced little measured lowering, choose a different lateral direction first. For a return to the same empty pose, change the approach direction or depth rather than repeat that approach. Use the demonstrated local scales and compare the next measured response.
- Re-observation and exit: If contact evidence appears, retain the placement and use Phase 3 immediately. Otherwise, once relocation is achieved, end the corrective movement and return to a closing probe, even if open-finger tactile imagery is still smooth. Apply any further correction only to the new response; a prior empty result does not keep the controller in recovery after useful motion or contact resumes.

- Observable anomaly: During open search, translational requests produce very little measured movement.
- One minimal correction: Change the lateral probing direction once, using a local scale that previously produced measured motion.
- Re-observation and exit: If contact evidence appears, retain it and use Phase 3. Otherwise, if travel resumes, probe at the reached placement. If the new direction also produces little measured travel and no contact feature is developing, make one short open-finger upward reposition, inspect the resulting height, then choose a lateral pass from that pose. Skip this reposition if motion or contact has already recovered. Low response alone does not identify a wall, a grasp, or failure.
