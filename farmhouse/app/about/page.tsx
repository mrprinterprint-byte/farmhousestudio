"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const animals = [
  {
    id: 1,
    name: "Scar",
    image: "/1.jpg",
    description:
      "He thinks he’s the king of the farm, strutting around like he is wearing an invisible crown. If you give him a bucket, he’ll knock it over, not because he’s hungry, but because chaos is his hobby",
  },
  {
    id: 2,
    name: "Boba",
    image: "/2.jpg",
    description:
"Always hungry, always chewing. If it looks edible (and even if it doesn’t), he’ll give it a try. He’s basically a four legged vacuum with horns and a mischievous twinkle in his eye."
  },
  {
    id: 3,
    name: "Rocky",
    image: "/3.jpg",
    description:
      "He “talks” all day long with grumbles and bleats, like he is telling you the farm’s latest gossip. If the other goats do something silly, Rocky makes sure everyone knows about it."
  },
  {
    id: 4,
    name: "Pope",
    image: "/4.jpg",
    description:
      "Pope is the thoughtful one of the herd, carrying himself with a calm and serious air. He often stands back, quietly observing before joining in, as if he’s making sure everything is just right. But beneath that steady nature is a friendly heart—he’s always happy to welcome a pat or walk beside you once he’s decided you’re a friend. Pope may be serious, but he’s the kind of goat that makes the farm feel safe and grounded",
  }, {
    id: 5,
    name: "Mars",
    image: "/5.jpg",
    description:
      "Mars is one of the sweetest souls on the farm. He loves showing you his toys, happily trotting over to share them before nudging in for a gentle pat on the head. He likes to sit by you and walk by your side through the fields. Mars likes to keep a watchful eye on his farm friends, and carries himself like a true gentleman - kind, calm and always looking out for everyone around him.",
  },{
    id: 6,
    name: "Harley",
    image: "/6.jpg",
    description:
      "She’s a bundle of energy, always ready to run, play, and make friends with every animal she meets. Her favorite hobby is sneaking bites from your plate, because of her, food is pure joy. When she is not chasing after a ball or racing across the yard, she’s the most lovable cuddle bug, curling up in her bed and drifting into the coziest sleep. With her playful spirit and friendly heart, she fills everyday with laughter and warmth",
  },
];

function ReadMore({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <p className="text-gray-600">
      {isExpanded ? text : text.slice(0, 100) + (text.length > 100 ? "..." : "")}
      {text.length > 100 && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering modal
            setIsExpanded(!isExpanded);
          }}
          className="ml-2 text-emerald-700 font-medium hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
}


export default function AboutPage() {
  const [selected, setSelected] = useState<null | typeof animals[0]>(null);

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white text-gray-900">
      {/* Farmhouse Intro */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[28rem] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/panaroma.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white drop-shadow-xl text-center">
          Welcome to Our Farmhouse
        </h1>
      </motion.header>

      {/* Introduction */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-amber-900">
            Our Farmhouse Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
           Our farm, originally built in 1901 and purchased by our family in 2018, has become a cherished place where we gather to reconnect, and make lasting memories together and with our friends. 
After a busy and sometimes stressful week, escaping to the farm feels like a breath of fresh air. The serene fields and glowing sunsets invite you to slow down and unwind. There is nothing quite like spending time with the animals, letting their presence sooth and refresh you.  
We began with adopting our dogs Harley and Mars. Harley is half hound half boxer and Mars is a Golden Retriever. They both are  happy and friendly dogs that enjoy  interacting and playing with those around them. They also help take care of our farm and the other animals!  
We then adopted many chickens and baby chicks and along the way learned how to create a healthy environment for them to thrive in. Our chickens provide us with fresh eggs to eat on a daily!
To expand our farm family even more, we brought in some beautiful peacocks, mischievous goats and the three cutest cats! 
All of these farm members add to the farm by bringing joy, life and a sense of wonder to every corner.
Whether you are looking for a retreat, a chance to capture timeless photos, or simply a day surrounded by nature and happy memories, our farm feels like a world apart. Explore sunlit fields, watch the sky glow at sunset, and meet animals that seem to have their own stories to tell. Here, every moment sparkles with wonder and creates memories that linger long after you leave.

          </p>
        </motion.section>

        {/* Meet Our Animals */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-900">
            Meet Our Animals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {animals.map((animal, index) => (
             <motion.div
  key={animal.id}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white"
>
  {/* 🖼 Image clickable for modal */}
  <motion.img
    src={animal.image}
    alt={animal.name}
    className="w-full h-72 object-cover"
    onClick={() => setSelected(animal)}
  />

  {/* 📝 Content NOT clickable for modal */}
  <div className="p-6">
    <h3 className="text-2xl font-semibold text-amber-800 mb-2">
      {animal.name}
    </h3>
    <ReadMore text={animal.description} />
  </div>
</motion.div>

            ))}
          </div>
        </motion.section>
      </main>

      {/* Modal for expanded animal view */}
   <AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)} // close when clicking background
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()} // prevent background close
      >
        {/* Close button */}
        <button
          className="absolute -top-4 -right-4 text-white bg-black/70 hover:bg-black/90 rounded-full p-2"
          onClick={() => setSelected(null)}
        >
          ✕
        </button>

        {/* Image itself defines popup size */}
        <img
          src={selected.image}
          alt={selected.name}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </div>
    
  );
}
