# Task Skill

## Phase transitions

### Phase 1: Enter with open fingers

- Primary objective: Lower the open gripper into the container's working region.
- Observable transition condition: Measured height has fallen into the low probing region and is settling. Probing occurs around z≈0.02–0.035 m in these references; this is a reference range, not a universal depth gate. The object need not become visible.
- Default behavior: Keep the fingers open, preserve the working orientation, and descend with local positioning adjustments. Use measured pose and recent executed actions, not accumulated requested targets.
- Exit or correction condition: If further downward requests produce little height change, begin lateral probing and reassess depth rather than waiting for an informative image.

### Phase 2: Search and position a grasp attempt

- Primary objective: Explore the hidden region and bring the fingers to a local grasp candidate.
- Observable transition condition: A local sweep has reduced to small positioning adjustments at a nearly steady low height. This provides an opportunity for a closing trial even when right TacRGB is still smooth; a preexisting tactile imprint is not required.
- Default behavior: Keep the fingers open while making lateral passes, changing direction or nearby XY location, and making modest height adjustments. Continue using pose history when front RGB does not expose the target.
- Exit or correction condition: If a pass produces little measured displacement or no useful localization, change the local probing direction and reobserve rather than treating uncertainty as a stop signal.

### Phase 3: Close and establish contact

- Primary objective: Acquire a grasp and let finger contact settle before sustained ascent.
- Observable transition condition: A distinctive right-tactile structure appears during narrowing and remains visible as the local pose and closing attempt settle.
- Default behavior: Narrow progressively while keeping the EEF approximately in place, allowing small alignment corrections. Demonstrations reduce per-finger targets from about 0.04 toward 0.025 m, then maintain the narrower command while the tactile feature develops.
- Exit or correction condition: If the feature is still developing, maintain the attempt briefly and reobserve. If acquisition remains unconfirmed, reassess local placement and continue a local search or grasp attempt; the requested finger opening alone does not establish a grasp.

### Phase 4: Lift while retaining contact

- Primary objective: Raise the grasped object out of the container while maintaining the grasp.
- Observable transition condition: Increasing measured EEF height together with a persistent tactile structure supports continued lift progress. These demonstrations do not establish a separate terminal phase, fixed clearance height, or stopping count.
- Default behavior: Maintain the narrower finger command, begin upward motion, and continue predominantly vertical ascent with small positioning corrections while checking the tactile feature. Exact silhouette, projection count, or image centering is unnecessary.
- Exit or correction condition: If initial upward requests yield little measured rise but the contact feature remains, reassess pose and continue a controlled upward step. Do not mistake issued lift commands for achieved motion or completion.

## High-confidence priors

- Pattern: Approach and probe with open fingers while largely preserving the working orientation.
- Applicable phase: 1–2.
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

- Observable anomaly: A local probe leaves front RGB nonlocalizing and right TacRGB without a distinctive feature.
- One minimal correction: Make one nearby lateral reposition or reverse the current local pass.
- Re-observation: Compare actual EEF displacement and the new tactile image before choosing another probe or closing trial.

- Observable anomaly: During open search, translational requests produce very little measured movement.
- One minimal correction: Change the lateral probing direction once.
- Re-observation: Check measured XYZ and tactile response after that correction; low response alone does not identify a wall, a grasp, or failure.