# Spellsong Drafts (for review)

Nothing here has been applied to the book yet.

---

## 1. Chapter 9: Spellcasting — new section

Placed as a new H2 after **Cantrips** (end of the chapter), in the chapter's prose style.

```mdx
## Spellsongs

Some clerical spells are **Spellsongs**: magic carried in voice, verse, and rhythm rather than in the hand. A Spellsong's description says that it is one. Spellsongs follow the normal rules for spells, except as described in this section. Your class determines whether you can cast Spellsongs and how you prepare them.

### Performing a Spellsong

A Spellsong is performed aloud. You sing, chant, or recite it, and it does not require a Casting Hand, whatever your casting method. The Components section of a Spellsong describes the performance rather than gestures.

When the Spellsong is complete, its effects take hold as described in the spell. Until the Spellsong ends, you are still performing it aloud.

You must be able to be heard to start or refresh a Spellsong. If you can't be heard, such as when you are struck mute or magically silenced, you can't start or refresh one, and any Spellsong you are performing ends at the end of the current round's Phase 9.

### Accompaniment

Some classes can accompany a Spellsong with music or rhythm. Your class describes how you accompany a Spellsong and what it costs.

Some Spellsongs list an **Accompaniment** benefit. It applies if you accompanied the song the last time you started or refreshed it.

### Song Duration

Each Spellsong lists three values under *Song Duration* in its description:

- **Lingering:** the number of rounds the song lasts. The count begins when you complete the song, and one round is removed at the end of each Phase 9.
- **Refresh:** the number of Actions you spend to reset the Lingering count to its full value. You can refresh any time before the count runs out. Refreshing never costs another spell slot.
- **Maximum:** the longest the song can last, measured from when you first completed it. You can't refresh a Spellsong past its Maximum.

### Competing Spellsongs

A creature can be affected by only one Spellsong at a time.

A Spellsong is **detrimental** if its description calls for a Saving Throw to resist it. All other Spellsongs are **beneficial**.

- If a creature would gain a second beneficial Spellsong, it chooses which to keep, and the other ends for it immediately.
- A creature can't refuse a detrimental Spellsong. If it fails its Saving Throw, the detrimental song replaces any other Spellsong affecting it.
- A creature affected by a beneficial Spellsong gains a +2 magic bonus to Saving Throws made to resist a detrimental Spellsong.

### Ending a Spellsong

A Spellsong ends when its Lingering count runs out, when it reaches its Maximum, or at the end of a round in which you can't be heard. You can end it early at any time (no Action required).

You can perform only one Spellsong at a time. When you start a new one, the effects of your previous Spellsong end immediately, including any Lingering duration it has left.
```

---

## 2. Bard — Bardsong card (replaces current card)

```mdx
<GameplayCard
  colorSet="fixedfeature"
  title="Bardsong"
  subeyebrow="2nd Level Bard Feature"
  headerOrder={['title', 'subeyebrow']}
  toc
>
Upon reaching 2nd level, you can weave your spells into song, verse, and music. You can cast Spellsongs, following the rules in [*Spellsongs*, Chapter 9: Spellcasting](/playersguide/09-spellcasting/#spellsongs).

<FeatureSection title="Preparing Spellsongs">
  * When you prepare spells, you can prepare **Spellsong** in place of a specific spell, in a spell slot of any level you can cast.
  * When you cast a prepared Spellsong, choose any Spellsong on the bard spell list whose level is equal to or lower than the slot's level. A spell slot can't be used to cast a cantrip Spellsong.
  * Cantrip Spellsongs work the same way. Prepare **Spellsong** as one of your cantrips, then choose any cantrip Spellsong when you cast it.
</FeatureSection>

<FeatureSection title="Accompaniment">
  * You accompany a Spellsong by playing a musical instrument held in both hands as you start or refresh it. Accompaniment costs no additional Actions.
</FeatureSection>
</GameplayCard>
```

### Bard — Spellcasting card changes

- **Spell Preparation** and **Cantrips** subsections: retitle `Bardsong` → `Spellsongs`, and change "prepare **Bardsong**" → "prepare **Spellsong**", still pointing to *Bardsong*, 2nd Level Bard Feature.
- **Casting Spells** becomes:

```mdx
  <FeatureSection title="Casting Spells">
  You use the Free-Hand casting method described in [Chapter 09: Spellcasting](/playersguide/09-spellcasting/). Spellsongs don't require a Casting Hand (see *Spellsongs* in Chapter 9: Spellcasting).
  </FeatureSection>
```

---

## 3. Skald — new 7th-level cards

Features table gains: `| **7** | Spellcasting, Galdr |`

```mdx
<GameplayCard
  colorSet="spellcasting"
  title="Spellcasting"
  subeyebrow="7th Level Skald Feature"
  headerOrder={['title', 'subeyebrow']}
  toc
>
Upon reaching 7th level, you have sung enough deeds into memory that the words have begun to answer back. The old poems are not only remembered; they are heard, by the living and by whatever listens beyond them. Each spell is a verse you have hammered into memory. When you perform it, the words are spent and slip from your mind until you rehearse them again.

Your spells are **clerical spells**, and you use the **Free-Hand** casting method. You otherwise follow the general rules in [Chapter 09: Spellcasting](/playersguide/09-spellcasting/).

  <FeatureSection title="Spell Preparation">
  As part of a Safe Rest, you may rehearse your spells. During this rehearsal, you recite the old verses aloud, beat out their rhythm, and fix each one firmly in memory.

  You may prepare any spell on the Skald spell list for which you have a spell slot of the appropriate level. The spells you prepare take effect when you complete the Safe Rest. If the Safe Rest is not completed, the spells are not prepared.

    <FeatureSubsection title="Spellsongs">
    You can prepare **Spellsong** in any spell slot and choose the song when you cast it (see *Galdr*, 7th Level Skald Feature).
    </FeatureSubsection>
  </FeatureSection>

  <FeatureSection title="Spell Scrolls">
  You can cast spells from Spell Scrolls only if the spell appears on the Skald spell list.
  </FeatureSection>

  <FeatureSection title="Reversible Spells">
  Each time you prepare a reversible spell, choose whether you prepare its primary or reverse form. The chosen form is treated as the prepared spell.

  Preparing one form does not prepare the other. To have both forms available, you must prepare each separately.
  </FeatureSection>

  <FeatureSection title="Casting Spells">
  You use the Free-Hand casting method described in [Chapter 09: Spellcasting](/playersguide/09-spellcasting/). Spellsongs don't require a Casting Hand (see *Spellsongs* in Chapter 9: Spellcasting).
  </FeatureSection>

  <FeatureSection title="Cantrips">
  Cantrips are war-cries and short verses, easily called to mind.

  When you prepare your spells as part of a Safe Rest, you may also prepare the number of cantrips shown on your Spell Progression table from the Skald cantrip list.

  Your Spell Progression table also shows the number of cantrip casts in your shared pool. You regain all expended cantrip casts when you complete a Night's Rest.

    <FeatureSubsection title="Spellsongs">
    You can prepare **Spellsong** as one of your cantrips and choose any cantrip Spellsong when you cast it (see *Galdr*, 7th Level Skald Feature).
    </FeatureSubsection>
  </FeatureSection>
</GameplayCard>

<GameplayCard
  colorSet="fixedfeature"
  title="Galdr"
  subeyebrow="7th Level Skald Feature"
  headerOrder={['title', 'subeyebrow']}
  toc
>
Upon reaching 7th level, your verses become galdr, chanted spell-charms that carry over the din of battle. You can cast Spellsongs, following the rules in [*Spellsongs*, Chapter 9: Spellcasting](/playersguide/09-spellcasting/#spellsongs).

<FeatureSection title="Preparing Spellsongs">
  * When you prepare spells, you can prepare **Spellsong** in place of a specific spell, in a spell slot of any level you can cast.
  * When you cast a prepared Spellsong, choose any Spellsong on the skald spell list whose level is equal to or lower than the slot's level. A spell slot can't be used to cast a cantrip Spellsong.
  * Cantrip Spellsongs work the same way. Prepare **Spellsong** as one of your cantrips, then choose any cantrip Spellsong when you cast it.
</FeatureSection>

<FeatureSection title="Accompaniment">
  * You accompany a Spellsong by beating out its rhythm: clashing a weapon against your shield, striking your armor with weapon or fist, or beating a war-drum. It doesn't matter what you are holding.
  * Accompaniment costs 1 additional Action each time you start or refresh a Spellsong with it.
</FeatureSection>
</GameplayCard>
```

---

## 4. Song of Courage (spell file)

```mdx
---
datatype: spell
title: Song of Courage
level: 1
casting: 3 Actions; Phase 2
range: 30 feet
duration: Spellsong (see below)
shortDescription: Your song steels allies against fear.
classes:
  - Bard
  - Skald
---
import FeatureSection from '../../../../../components/FeatureSection.astro';
import FeatureSubsection from '../../../../../components/FeatureSubsection.astro';
import SpellEntry from '../../../../../components/SpellEntry.astro';

<SpellEntry title="Song of Courage">

    <FeatureSection title="Spellsong">
        This spell is a Spellsong and follows the Spellsong rules (see *Spellsongs* in Chapter 9: Spellcasting).

        <FeatureSubsection title="Song Duration">
            * **Lingering:** 3 rounds
            * **Refresh:** 1 Action
            * **Maximum:** 10 minutes
        </FeatureSubsection>
    </FeatureSection>

    <FeatureSection title="Song Effect">
        Each ally within range who can hear you gains a +2 magic bonus to Saving Throws made to resist fear effects.

        <FeatureSubsection title="Accompaniment">
            When you start or refresh this song with Accompaniment, each affected ally who is currently under a fear effect can immediately attempt a new Saving Throw against it, with this song's bonus.
        </FeatureSubsection>
    </FeatureSection>

    <FeatureSection title="Creature Interactions">

        <FeatureSubsection title="Non-Player Characters">
            * In addition to the normal effects of this spell, an affected non-player character gains a +2 magic bonus to Morale.
        </FeatureSubsection>

    </FeatureSection>

    <FeatureSection title="Spell Improvements">

        <FeatureSubsection title="When you can cast 3rd-level spells">
            * The song's Lingering duration increases to 4 rounds.
        </FeatureSubsection>

    </FeatureSection>

    <FeatureSection title="Components">

        <FeatureSubsection title="Casting">
            Sing, chant, or recite a stirring verse of a hero who stood firm when others fled.
        </FeatureSubsection>

    </FeatureSection>

</SpellEntry>
```
