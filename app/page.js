"use client";

import { useState } from "react";

/* =========================
   HARD-CODED CHALLENGES
========================= */

const CHALLENGES = [
  {
    id: "catch-3-bugs",
    title: "Catch 3 bugs ⭐",
    description:
      "You must have all 3 bugs at the same time.  The bugs do not have to be local in origin but you must have caught them in the ward.",
  },
  {
    id: "get-legally-drunk",
    title: "Get legally drunk ⭐",
    description:
      "One team member must reach the “Legally Impaired” / Yellow level according to this chart.",
  },
  {
    id: "newspaper-puzzle",
    title: "Solve a newspaper puzzle ⭐",
    description:
      "Buy a physical newspaper and correctly solve a puzzle inside it.  The paper must be bought inside the ward in which you solve it.",
  },
  {
    id: "statue-recreate",
    title: "Find and recreate a statue ⭐",
    description:
      "Locate a statue without using the internet.  One team member must hold the pose for at least 5 minutes.",
  },
  {
    id: "poutine-ad",
    title: "Find poutine advertised",
    description:
      "Find an advertisement for poutine that’s visible from outdoors.  The advertisement must say the word “poutine” and/or have a picture that’s clearly poutine.",
  },
  {
    id: "local-event",
    title: "Attend a local event ⭐",
    description:
      "This means a gathering of multiple people at an event that is open to the public.  Timed public installations count.",
  },
  {
    id: "politician-camera",
    title: "Capture a politician on camera ⭐",
    description:
      "They may be elected or appointed.  The picture must be clear enough that, given it and the politician’s official picture, a reasonable third party would agree they are the same person.",
  },
  {
    id: "consulate-embassy",
    title: "Visit a consulate or embassy",
    description:
      "You may not use the internet to determine its location.  You do not need to gain entry; a picture outside will suffice.",
  },
  {
    id: "walk-ward-border",
    title: "Walk a ward’s border [2X]",
    description:
      "Walk the entire length of two wards’ shared border.  The border must be on land (it cannot be only through a bridge, tunnel, etc.).  You do not need to walk exactly on the border; you may walk between the two endpoints any way you wish.  If the border is split into multiple segments, you only need to walk one segment to claim the wards.",
  },
  {
    id: "predict-stm-doors",
    title: "Predict STM doors",
    description:
      "At any train or bus station, stand where you think the train doors are going to land.  You must be in position 20 seconds before the vehicle stops.  You may only attempt this once per ward.",
  },
  {
    id: "anonymous-threat",
    title: "Send an anonymous threat",
    description:
      "Using a device that is not yours, send a threatening text to one of the other teams.",
  },
  {
    id: "exact-666",
    title: "Spend exactly $6.66 ⭐",
    description:
      "This is based on the listed price, even if tax-exclusive.  You may not tip, or pay more or less than the listed price.",
  },
  {
    id: "fast-and-furious",
    title: "Be Fast and Furious",
    description:
      "Reach a speed of at least 20 kilometres per hour while angrily ranting about something you don’t like.  This cannot be done while in/on a train, car, or bus.",
  },
  {
    id: "bird-stalk",
    title: "Stalk a bird",
    description:
      "You must have a single bird on camera continuously for five minutes.  If you ever lose sight of the bird or have to cut, you must start over.  The bird must be alive, and may not be caged.",
  },
  {
    id: "find-gun",
    title: "Find a gun ⭐",
    description:
      "Find a real gun. The gun cannot be a depiction of a gun.  The gun must be an actual firearm.",
  },
  {
    id: "little-prince",
    title: "Locate The Little Prince",
    description:
      "Find a physical copy of The Little Prince.",
  },
  {
    id: "distant-flag",
    title: "Find a distant flag",
    description:
      "It must be a country flag aside from that of Canada or the USA.",
  },
  {
    id: "cry",
    title: "Cry",
    description:
      "Produce any actual tear(s), using any means necessary.",
  },
  {
    id: "face-snack",
    title: "Face snack",
    description:
      "Place a snack of any kind on your forehead. Without using your hands, without help, and without the snack falling off your face, eat the snack.",
  },
  {
    id: "bribe-police",
    title: "Bribe the police",
    description:
      "Visit any local police station and leave any amount of cash outside with a note outlining your (silly) demands.  (You may take the money back after.)",
  },
  {
    id: "team-mascot",
    title: "Get a team mascot",
    description:
      "Acquire any stuffed animal or figurine. Name it and keep it with you the rest of the game.",
  },
  {
    id: "haunt-opponents",
    title: "Haunt your opponents ⭐",
    description:
      "Send your opponents a spooky video from somewhere on this list.  If you cannot enter the location for free, you may haunt your opponents from just outside.  [If Ville-Marie, Plateau Mont-Royal, Cote des Neiges, and Ste Anne de Bellevue are all claimed, you may discard this challenge and draw a new one.]",
  },
  {
    id: "graffiti-name",
    title: "Spell your name in graffiti",
    description:
      "Find all of the letters in one team member’s first name in already-written graffiti.  The letters can, but do not need to, be from the same piece of graffiti.  You may not make the graffiti yourself.",
  },
  {
    id: "market-flow",
    title: "Predict market flow",
    description:
      "Choose a store, and predict the amount of people that will enter the store within the next 10 minutes.  The store must be open.  Your prediction must be less than 40% off to complete the challenge.  If your prediction is exactly correct, you earn a ⭐.  You may only make one attempt per ward.",
  },
  {
    id: "planespot",
    title: "Planespot ⭐",
    description:
      "Photograph a plane on a trans-oceanic route.  Use flightradar24 to verify.",
  },
  {
    id: "visit-water",
    title: "Visit the water",
    description:
      "Get within 1 metre of the Prairies River, St Lawrence River, Thousand Islands River, or Lake of Two Mountains (i.e. the water surrounding Montreal and Laval Islands).",
  },
  {
    id: "expensive-car",
    title: "Find an expensive car",
    description:
      "The car must be worth at least 125,000 CAD.  It must be a real car, not a depiction.  If it is worth at least 200,000 CAD, you earn a ⭐.",
  },
  {
    id: "ward-claim-1",
    title: "Claim this ward immediately, but…",
    description:
      "You may not board transit until you have visited 3 more wards.",
  },
  {
    id: "identical-addresses",
    title: "Find identical addresses [2X]",
    description:
      "Visit two places with identical addresses (same number and street name).  If they are in separate unclaimed wards, claim both.",
  },
  {
    id: "atlas-obscura",
    title: "Atlas Obscura",
    description:
      "Visit a location from atlasobscura.com.  Spend at least 5 minutes there, and tell the opposing teams 3 fun facts about the place.",
  },
  {
    id: "old-money",
    title: "Find old money",
    description:
      "Find a piece of money dated prior to 2000.  It cannot be cash you possessed when this challenge was drawn.  If the money is dated prior to 1980, you earn a ⭐.",
  },
  {
    id: "bridge-riddle",
    title: "Solve a riddle under a bridge ⭐",
    description:
      "Get under a bridge, then visit TedEd's Riddles playlist and select a video at random.  If anyone on the team is familiar with that riddle, select another video randomly.  Once you hear the background information, pause and come up with an answer.  You may only attempt one riddle per ward.",
  },
  {
    id: "ward-claim-2",
    title: "Claim this ward immediately, but…",
    description:
      "Before replenishing your hand, reveal your hand to the opposing teams.  They may select one challenge; you must do that challenge next.  (If you need to veto this, you may do so, but the ward becomes unclaimed, and you must stay in one place for 30 minutes starting when you veto it.)",
  },
  {
    id: "aw-visit",
    title: "Visit every A&W in a ward",
    description:
      "There must be at least one.  Earn a ⭐ per 4 A&W’s visited (round down).",
  },
  {
    id: "islands-island",
    title: "Visit an island’s island ⭐",
    description:
      "Visit an island other than Montreal or Laval.  If it isn’t part of a ward, claim the ward it’s closest to.",
  },
  {
    id: "transit-ride",
    title: "Ride transit through a ward ⭐",
    description:
      "The vehicle you’re in cannot make any scheduled stops between entering and exiting the ward.",
  },
  {
    id: "all-stations",
    title: "Visit every train station in a ward",
    description:
      "This includes Exo, REM, and Metro stations.  There must be at least one station within the ward.  You do not need to get there by train.  You do not need to visit any train station that will not receive service within the next week.",
  },
  {
    id: "dollarama",
    title: "Visit every Dollarama in a ward",
    description:
      "There must be at least one.  Earn a ⭐ per 5 Dollaramas visited (round down).  Earn ⭐⭐ if you complete this in Mont-Royal and visit Dollarama’s headquarters.",
  },
  {
    id: "perfect-timing",
    title: "Perfect timing",
    description:
      "Find the current time represented somewhere permanent.  (The display must not change every minute.)  The time may be a 3- or 4- digit number with or without a colon; 12-hour or 24-hour format are acceptable.",
  },
  {
    id: "race-bus",
    title: "Race a bus ⭐",
    description:
      "One teammate must race a bus at least one stop and win.  The other teammate should ride the bus that distance.  The race starts when doors open at the beginning stop, and ends when doors close at the ending stop.",
  },
  {
    id: "good-citizen",
    title: "Be a good citizen",
    description:
      "Get a stranger to say “Thank you” or “Merci” to you.  You may not indicate to them in any way that they are meant to do this.",
  },
  {
    id: "find-waldo",
    title: "Find Waldo ⭐",
    description:
      "Find someone (not playing the game) wearing a red and white shirt.  It may contain other colours as long as red and white are the two most common colours.",
  },
  {
    id: "via-train",
    title: "Photograph a VIA train ⭐",
    description:
      "If you ride a VIA train, earn an additional ⭐⭐.",
  },
  {
    id: "semaphore",
    title: "Communicate via Semaphore ⭐",
    description:
      "Using pre-designated arm signals, silently communicate a randomly generated 8-letter word to your opponent.  You may use flags or other props, but are not required to.  You may only attempt this challenge once per ward.",
  },
  {
    id: "ward-claim-3",
    title: "Claim this ward immediately, but…",
    description:
      "Unclaim a different ward of your choosing.",
  },
  {
    id: "paper-boat",
    title: "Make a paper boat",
    description:
      "The boat must be placed in water and float for at least 30 seconds.",
  },
  {
    id: "infiltrate",
    title: "Infiltrate enemy lines",
    description:
      "Enter a university or college building aside from McGill’s.",
  },
  {
    id: "both-in-ward",
    title: "Claim this ward immediately, but…",
    description:
      "Both pairs on your team must be in the ward.  This may not be completed within the first 60 minutes of the game.",
  },
  {
    id: "quizmaster",
    title: "Quizmaster",
    description:
      "Complete a randomly generated Sporcle quiz and score at least 55%.  You may only attempt this once per ward.  If you score at least 85%, earn a ⭐.",
  },
  {
    id: "two-challenges",
    title: "Complete any 2 challenges of your choosing",
    description:
      "Choose any two challenges from the list and complete them.  You do not get any ⭐s from this.",
  },
  {
    id: "tire",
    title: "Find a tire at Canadian Tire ⭐",
    description:
      "The tire can be of any size and for any use, but must indisputably be a tire.",
  },
  {
    id: "play-ball",
    title: "Play ball",
    description:
      "Find any sports field and score a point against your teammate using a ball.  You may find or create that ball, and any other infrastructure needed (goal, basket, etc).",
  },
  {
    id: "old-grave",
    title: "Find an old grave",
    description:
      "The grave must be at least 100 years old.  If it is at least 200 years old, earn a ⭐.",
  },
  {
    id: "pretend-rural",
    title: "Pretend to be rural",
    description:
      "Walk 1 kilometre without crossing a street, and without retracing your steps.  You must remain on marked paths and sidewalks.",
  },
  {
    id: "transit-enthusiast",
    title: "Be a transit enthusiast",
    description:
      "Be on 3 different transit lines within 20 minutes.  The time starts when you disembark the first vehicle, and ends when you board the third.  (You may count e.g. Rem A4 and A3 as two separate lines, but inbound and outbound are the same line.)",
  },
  {
    id: "light-kingdom",
    title: "Everything the light touches is our kingdom ⭐",
    description:
      "Reach an edge of the game map that’s in Zone B.",
  },
  {
    id: "traffic-cop",
    title: "Be a traffic cop",
    description:
      "Find a car that is parked illegally.",
  },
  {
    id: "fish-eye",
    title: "Find a fish eye ⭐",
    description:
      "The eye may be attached or detached, but must once have been part of a real fish.  You must see the eye; seeing a fish and knowing it has an eye does not count.",
  },
  {
    id: "adversaries",
    title: "Locate your adversaries",
    description:
      "Plot 2 points on a map; your objective is to pinpoint within 1 kilometre of the other teams.  If at least 1 other team is within 1 kilometre of a point, this challenge is completed.  If both are, earn a ⭐.  If neither are, you may not re-attempt this challenge for 15 minutes (but may attempt another).  If this challenge is drawn within 1 hour of the game’s start, discard and redraw.",
  },
  {
    id: "street-bingo",
    title: "Street name bingo",
    description:
      "Visit 5 streets whose names begin with the same letter as each other, or end with the same letter as each other.",
  },
  {
    id: "student-discount",
    title: "Find a student discount",
    description:
      "Without researching online, find a place that has a discount for students or young adults.  The establishment doesn’t need to be open, but once there you need to verify the discount’s existence and currency.",
  },
  {
    id: "natural-tower",
    title: "Build a natural tower ⭐",
    description:
      "Using sticks, rocks and other natural materials, create a freestanding natural structure at least 40 centimetres/16 inches tall that can stand upright for at least 10 seconds.",
  },
  {
    id: "phone-sale",
    title: "Find a phone for sale",
    description:
      "It may either be a flyer advertising a phone for sale, or a physical phone being sold.",
  },
  {
    id: "slip-lane",
    title: "Slip in a slip lane",
    description:
      "A slip lane is a one-way road section that allows vehicles to turn onto a cross street without stopping for a red light or entering the main intersection.  You do not need to actually slip; an exaggerated fake fall will suffice.  If you get hit by a car, you may not advance the gamestate until seeking medical attention if deemed necessary.",
  },
  {
    id: "defaced-sign",
    title: "Find a defaced sign",
    description:
      "The defacement (sticker or graffiti) must be on the front of the sign.",
  },
  {
    id: "go-shopping",
    title: "Go shopping",
    description:
      "Buy something that will be genuinely useful to you post-game.",
  },
  {
    id: "library-speedrun",
    title: "Library speedrun ⭐",
    description:
      "Enter a library or bookstore, and within 5 minutes of entering, find the words “Battle”, “4”/”four”, and “Montreal” printed in books.  If you run out of time, you may re-attempt, but may not do so in the same library or bookstore.",
  },
  {
    id: "go-habs-go",
    title: "Go Habs Go",
    description:
      "Photograph 3 people wearing Habs jerseys.  If you photograph someone currently on the Habs’ roster, earn ⭐⭐⭐.",
  },
  {
    id: "winter",
    title: "Montreal Winter",
    description:
      "Find any amount of snow or ice.",
  },
  {
    id: "moving-day",
    title: "Moving Day",
    description:
      "Find any object that has clearly been left abandoned on the sidewalk in the hopes that someone takes it.",
  },
];

/* =========================
   APP
========================= */

export default function App() {
  const [hand, setHand] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [open, setOpen] = useState({
    hand: true,
    choose: true,
    completed: true,
  });

  const toggle = (key) =>
    setOpen((p) => ({ ...p, [key]: !p[key] }));

  const available = CHALLENGES.filter(
    (c) =>
      !hand.find((x) => x.id === c.id) &&
      !completed.find((x) => x.id === c.id)
  );

  const drawRandom = () => {
    if (hand.length >= 3) return;
    const pool = available.filter((c) => !hand.includes(c));
    if (!pool.length) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setHand([...hand, pick]);
  };

  const drawHand = () => {
    let newHand = [...hand];
    const pool = available.filter((c) => !newHand.find((x) => x.id === c.id));

    while (newHand.length < 3 && pool.length) {
      const pick = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      newHand.push(pick);
    }

    setHand(newHand);
  };

  const complete = (c) => {
    setHand(hand.filter((x) => x.id !== c.id));
    setCompleted([...completed, c]);
  };

  const discard = (c) => {
    setHand(hand.filter((x) => x.id !== c.id));
  };

  const resetAll = () => {
    if (!confirm("Reset all completed challenges?")) return;
    setCompleted([]);
  };

  const Card = ({ c, children }) => (
    <li className="border p-3 my-2 rounded">
      <div className="font-bold">{c.title}</div>
      <div className="text-sm whitespace-pre-wrap mt-1">
        {c.description}
      </div>
      <div className="mt-2">{children}</div>
    </li>
  );

  const Section = ({ title, k, children }) => (
    <div className="mb-6">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <button className="border px-2" onClick={() => toggle(k)}>
          {open[k] ? "Collapse" : "Expand"}
        </button>
      </div>
      {open[k] && children}
    </div>
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Challenge Deck</h1>

      <Section title="Hand (max 3)" k="hand">
        {hand.length === 0 && <p>No cards</p>}
        <ul>
          {hand.map((c) => (
            <Card key={c.id} c={c}>
              <button onClick={() => complete(c)} className="bg-green-500 text-white px-2 mr-2">
                Complete
              </button>
              <button onClick={() => discard(c)} className="bg-red-500 text-white px-2">
                Discard
              </button>
            </Card>
          ))}
        </ul>
      </Section>

      <div className="mb-4 space-x-2">
        <button onClick={drawRandom} className="bg-blue-500 text-white px-3">
          Draw Random
        </button>
        <button onClick={drawHand} className="bg-indigo-500 text-white px-3">
          Draw Hand
        </button>
      </div>

      <Section title="Choose Challenges" k="choose">
        <ul>
          {available.map((c) => (
            <Card key={c.id} c={c}>
              <button onClick={() => setHand([...hand, c])} className="bg-purple-500 text-white px-2">
                Add
              </button>
            </Card>
          ))}
        </ul>
      </Section>

      <Section title="Completed Challenges" k="completed">
        <button onClick={resetAll} className="border px-2 mb-2">
          Reset All
        </button>
        <ul>
          {completed.map((c) => (
            <Card key={c.id} c={c}>
              <button
                onClick={() => {
                  if (confirm("Remove this completion?")) {
                    setCompleted(completed.filter((x) => x.id !== c.id));
                  }
                }}
                className="bg-red-600 text-white px-2"
              >
                Remove
              </button>
            </Card>
          ))}
        </ul>
      </Section>
    </div>
  );
}