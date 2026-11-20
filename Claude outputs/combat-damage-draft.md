# DRAFT — Combat: Damage and Size

*Draft for review. Nothing here is in the Combat file yet. On approval, "Damage" goes into Chapter 08 right after "Grit and Hit Points" and absorbs its "Resistance, Immunity, and Vulnerability" subsection (that text is unchanged and stays where it's marked below). "Size" goes in after Combat Maneuvers. Examples will become GameplayCards and tables will use the green table style when inserted.*

*Items marked ⚑ are decisions I made while drafting that you haven't ruled on yet.*

---

## Damage

When an attack hits or a spell strikes home, roll its damage and apply it to the target. Most of the time that is all there is to it. This section covers the rest: what kind of harm you deal, what makes it worse or lessens it, and what to do when you'd rather not kill.

### Damage Rolls

A weapon attack deals **weapon damage**: your weapon's damage dice plus your damage roll bonus. How many dice you roll depends on your Combat Bonus (see [Weapon Damage and Damage Dice](/playersguide/02-character_creation/04-math/#weapon-damage-and-damage-dice)). Spells and other effects state their damage in their own text.

Some attacks deal more than their weapon damage. All damage falls into one of three categories:

- **Weapon damage.** The weapon's damage dice and your damage roll bonus. It deals the weapon's damage type.
- **Ambush damage.** Extra dice from features that reward catching a foe off guard, such as the Thief's Ambush. Ambush damage is part of the attack that delivers it and deals the same damage type. A dagger in the kidney is still piercing.
- **Added damage.** Extra damage with its own type, such as the 1d6 fire of a flaming sword or the cold of a frost-touched arrow. Added damage is rolled once, deals its own type, and is never changed by rules that change weapon damage.

### Damage Dice Steps

Many features and weapon properties increase or reduce a weapon's damage dice by a number of **steps**. Each step moves every weapon damage die one place along this line:

> **1 → d2 → d4 → d6 → d8 → d10 → d12**

A d8 reduced by 1 step becomes a d6. A d4 reduced by 2 steps deals a flat 1 per die. Add all step changes together before moving along the line, so a weapon that gains 1 step and loses 2 loses 1 overall. A die can never rise above d12 or fall below 1; any steps beyond either end are lost.

Steps change weapon damage dice only. They never change Ambush dice or added damage unless an effect says so.

### Damage Types

Every point of damage has a type. Types matter in three places: resistance, immunity, and vulnerability; which [lasting injury table](/playersguide/07-adventuring/lasting-injuries/) the GM rolls on; and the effects that call for a particular type.

| Type | Harm from |
|:--|:--|
| Acid | Corrosive liquids, digestive juices, caustic vapors |
| Bludgeoning | Clubs, hammers, fists, falls, and other blunt force |
| Cold | Freezing air, ice, and unnatural chill |
| Electrical | Lightning and other crackling energy |
| Fire | Flames and searing heat |
| Force | Raw magical energy that strikes like a physical blow |
| Piercing | Arrows, spears, bites, and other punctures |
| Poison | Venoms and toxins that harm the body directly |
| Profane | Unholy power that withers living flesh |
| Psychic | Assaults on the mind |
| Sacred | Holy power that sears the unclean |
| Slashing | Blades, claws, and other cutting edges |
| Sonic | Thunderous sound and shattering vibration |

Weapons list their type as **B** (bludgeoning), **P** (piercing), or **S** (slashing). A weapon that lists two types with **or**, such as *P or S*, deals whichever one you choose for each attack. Choose before you roll.

*[Weapons that deal two types at once (such as B & P) and effects that deal more than one type in a single blow: rule to come.]*

### Critical Hits

A natural 20 on an attack roll is a **critical hit**. Some weapon features widen this range, such as one that makes a natural 19 or 20 a critical hit.

On a critical hit, roll your **weapon damage dice and Ambush dice twice** and add them all together. Add your damage roll bonus only once. Added damage is never doubled: a flaming sword's 1d6 fire is rolled once, critical hit or not.

> **Example:** Brannoc has a Combat Bonus of +4 and swings a flaming arming sword (d6 S, plus 1d6 fire). He rolls a natural 20. He rolls 4d6 slashing (his two weapon dice, twice) and adds +4, then rolls 1d6 fire once.

#### Critical Protection and Critical Threats

Some defenders are hard to catch with a clean blow. A creature with **Critical Protection**, such as one wielding a shield it is proficient with, turns a would-be critical hit into a **Critical Threat**.

When you score a Critical Threat, make a **confirmation roll**: roll the attack again, with the same bonuses and penalties, against the same Armor Class. If the confirmation roll hits, the attack is a critical hit. If it misses, the attack is a normal hit. Either way, the original attack hits.

Critical Protection from more than one source has no further effect.

### Reducing Damage

When something lessens or worsens damage, apply it in this order:

1. **Immunity.** A creature immune to the damage's type takes none of it.
2. **Flat reductions.** Subtract any reduction by a set amount, such as Shield Block.
3. **Resistance or vulnerability.** Halve or double what remains.

Then apply what's left as described in [Taking Damage](#taking-damage).

> **Example:** A dwarf with resistance to fire raises his shield against a fire-blooded hound's bite: 13 fire damage. Shield Block reduces it by 5, leaving 8. His resistance halves that to 4.

*[The existing "Resistance, Immunity, and Vulnerability" subsection, unchanged, goes here.]*

*[Damage Reduction: parked.]*

### Riders

Many attacks carry an extra effect, such as poison on a blade, a shove, or a trip. These **riders** say when they happen:

- **On a hit.** The effect happens whenever the attack hits, even if Shield Block or another effect reduces its damage to 0.
- **If it deals damage.** The effect happens only if at least 1 point of damage reduces the target's Grit or Hit Points. ⚑ *Damage absorbed entirely by Ward does not count: the blow never truly reached the target.*

### Ward

Some magic and a few rare features surround you with **Ward**: a protective layer that takes blows before you do. An effect that grants Ward says how much, such as "you gain 6 Ward."

- Damage reduces your Ward before your Grit. Once your Ward is gone, any remaining damage carries over to your Grit as normal.
- Ward doesn't stack. If you gain Ward while you already have some, keep whichever amount is higher.
- Healing does not restore Ward, and rest does not recover it.
- Ward lasts until it is used up or the effect that granted it ends.
- ⚑ Hit Point damage ignores Ward, just as it ignores Grit.

### Subduing

Sometimes you'd rather take a foe alive. A **subduing attack** is meant to knock a creature senseless rather than kill it.

**Fighting to subdue.** You can subdue only with bludgeoning damage. A weapon that deals only bludgeoning damage can make a subduing attack at a −2 Situation penalty to the attack roll. Weapons with the Non-Lethal property suffer no penalty.

**Hilt-strikes.** Any other weapon, including one that deals bludgeoning and another type at once, can subdue only with a **hilt-strike**: a blow with the pommel, haft, or flat. A hilt-strike suffers a −3 Situation penalty to the attack roll, and the weapon's damage dice are reduced by 2 steps. A hilt-strike deals bludgeoning damage.

**Subduing damage.** A subduing attack that hits deals subduing damage. Its weapon damage and any Ambush damage are subduing damage. Added damage is not: a flaming club still burns, and that fire is as deadly as ever. ⚑ *Apply added damage first, then the subduing damage.*

Subduing damage reduces Grit as normal. If it would carry past the target's Grit, the target takes no Hit Point damage from it and is **knocked out** instead.

**Pulling your punches.** When you deal subduing damage, you can choose to deal any amount less than the total you rolled, to a minimum of 1. You can't reduce added damage this way.

**Unaware targets.** A creature that doesn't know the blow is coming is far easier to drop. Against an unaware creature, ignore its Grit: if the subduing damage is greater than its current Hit Points, it is knocked out. If not, the damage reduces its Grit as normal, and it is no longer unaware.

#### Knocked Out

A creature that is knocked out becomes <ConditionLink id="unconscious" /> for 1 hour and loses 1 Hit Point. ⚑ *This can't reduce it below 1 Hit Point.*

If the blow would have killed the creature had it been lethal, it also suffers a **Concussion** lasting injury. A blow would have killed if the damage carried past Grit is greater than the creature's current Hit Points, or, against an unaware creature, if the subduing damage is more than twice its current Hit Points.

> **Example:** Wenna wants the smuggler alive. He has 4 Grit and 3 Hit Points left. She swings her club, which deals only bludgeoning damage, and makes a subduing attack at −2. She hits for 6. The first 4 points take his Grit, and the remaining 2 would carry into his Hit Points, so he is knocked out instead. He drops, Unconscious for an hour, and loses 1 Hit Point. Had she hit for 9, the 5 points past his Grit would have been more than his 3 Hit Points, and he'd wake with a Concussion as well. She could have pulled her punch to avoid it.

---

## Size

Creatures come in nine size categories. A creature's size determines how much space it takes up on a grid, and many rules compare the sizes of two creatures.

Tiny and smaller creatures take up less room, so several can share a square. The table assumes a grid of 5-foot squares and creatures that are trying to fight. You could fit a whole litter of cats in a 5-foot square, but no more than two imps can crowd in to claw at the same warrior.

| Size | Space on a Grid |
|:--|:--|
| Fine | 8 creatures per square |
| Diminutive | 4 creatures per square |
| Tiny | 2 creatures per square |
| Small | 1 square (5 by 5 feet) |
| Medium | 1 square (5 by 5 feet) |
| Large | 4 squares (10 by 10 feet) |
| Huge | 9 squares (15 by 15 feet) |
| Gargantuan | 16 squares (20 by 20 feet) |
| Colossal | 36 squares (30 by 30 feet) |

**Comparing sizes.** When a rule refers to a creature being one or more sizes larger or smaller, count the categories between them on this table. A Medium human is one size smaller than a Large ogre and two sizes smaller than a Huge giant.

Rules that use size include [Combat Maneuvers](#combat-maneuvers), [crushing blows](/playersguide/07-adventuring/lasting-injuries/#damage-types), and [encumbrance](/playersguide/06-equipment/02-encumbrance/#size-adjustments).

---

### ⚑ Drafting decisions to confirm

1. **Riders and Ward:** damage that only reduces Ward doesn't trigger "if it deals damage" riders.
2. **Ward and Hit Point damage:** Hit Point damage skips Ward.
3. **Subduing with added damage:** added damage applies first, then subduing damage. This makes a knockout a little easier and keeps the lethal part away from Hit Points unless it's big enough on its own.
5. **Knockout Hit Point loss:** it can't drop a creature below 1 Hit Point. Without this, the 1 Hit Point cost would kill anyone already at 1.
6. **Encumbrance size table** lists only Tiny through Colossal. Fine and Diminutive need EP adjustments there (or a note that they can't carry gear).
7. **Critical Protection confirmation:** a second attack roll against the same AC (from my earlier proposal; you didn't object, but confirming).
