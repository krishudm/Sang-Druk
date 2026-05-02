import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/* 🔹 IMPORT IMAGES */
import SHS from "@/assets/SHS.png";
import SHS1 from "@/assets/SHS1.png";
import SHS2 from "@/assets/SHS2.png";
import SHS3 from "@/assets/SHS3.png";
import SHS4 from "@/assets/SHS4.png";
import SHS5 from "@/assets/SHS5.png";
import SHS6 from "@/assets/SHS6.png";
import SHS7 from "@/assets/SHS7.png";
import SHS8 from "@/assets/SHS8.png";

const sections = [
  {
    title: "1. Overview",
    img: SHS,
    content: `Precious Pills (Rinchen Rilbu) are the highest class of formulations in Tibetan medicine (Sowa Rigpa).

They are composed of:
• Detoxified minerals and metals (Tsothel)
• Precious stones (gold, silver, pearl, turquoise, coral)
• Rare medicinal herbs
• Spiritual and ritual processes

These medicines are considered both therapeutic and rejuvenative.`
  },
  {
    title: "2. Core Ingredient: Tsothel",
    img: SHS1,
    content: `Tsothel is a specially processed mercury compound.

Key properties:
• Detoxified through alchemical procedures
• Combined with sulfur and herbs
• Enhances absorption and potency
• Acts as a bio-enhancer`
  },
  {
    title: "3. Types of Precious Pills",
    img: SHS2,
    content: `Eight major formulations:

1. Rinchen Drangjor Rilnag Chenmo
2. Rinchen Ratna Samphel
3. Rinchen Tsajor Chenmo
4. Rinchen Mangjor Chenmo
5. Rinchen Tsotru Dashel Chenmo
6. Rinchen Yunying Nyernga
7. Rinchen Jumar Nyernga
8. Rinchen Seljed Chakril Chenmo`
  },
  {
    title: "4. Key Formulations & Uses",
    img: SHS3,
    content: `• Drangjor Chenmo: GI disorders, liver, joints, tumors  
• Ratna Samphel: Heart, stroke, neurological issues  
• Tsajor Chenmo: Arthritis, gout, edema  
• Mangjor Chenmo: Digestion, fever, blood disorders  
• Tsotru Dashel: Skin, respiratory, chronic weakness  
• Yunying: Brain and nerve support  
• Jumar: Liver and blood detox  
• Seljed Chakril: Immunity and regeneration`
  },
  {
    title: "5. Method of Administration",
    img: SHS4,
    content: `• Soak pill overnight in boiled water  
• Take early morning before sunrise  
• Drink with warm water  
• Rest and allow mild sweating  
• Follow with saffron-infused water`
  },
  {
    title: "6. Dietary Restrictions",
    img: SHS5,
    content: `For 3–7 days avoid:

• Meat (fish, pork, eggs)  
• Onion & garlic  
• Alcohol  
• Heavy/spicy food  
• Excess activity  
• Cold exposure`
  },
  {
    title: "7. Tibetan Medical Framework",
    img: SHS6,
    content: `Balances three energies (Nyepa):

• Rlung → Nervous system (anxiety, insomnia)  
• Tripa → Heat/metabolism (inflammation)  
• Badkan → Structure (congestion, obesity)

Goal: restore systemic equilibrium`
  },
  {
    title: "8. Modern Interpretation",
    img: SHS7,
    content: `Potential effects:

• Adaptogenic  
• Immunomodulatory  
• Neuroprotective  
• Anti-inflammatory  
• Detoxifying  
• Metabolic regulation`
  },
  {
    title: "9. Safety",
    img: SHS8,
    content: `• Must be prescribed by qualified practitioner  
• Not for self-medication  
• Strict dosage required  
• Proper detoxification is essential`
  },
  {
    title: "10. Conclusion",
    img: SHS8,
    content: `Precious Pills represent the pinnacle of Tibetan pharmaceutics combining:

• Herbal synergy  
• Mineral science  
• Alchemical processing  
• Spiritual medicine  

They serve as:
• Curative medicines  
• Preventive tonics  
• Rejuvenation therapies`
  }
];

const TibetanMedicine = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">

      {/* HEADER */}
      <div className="bg-spa-green">
        <Navbar />

        <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-sm mb-6 text-white">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <h1 className="text-4xl text-white">
            Precious Pills (Rinchen Rilbu)
          </h1>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* ✅ ADDED TOP INTRO IMAGE (ONLY CHANGE) */}
        <img
          src={SHS}
          alt="Precious Pills"
          className="w-full max-w-md mx-auto mb-6"
        />

        <p className="text-gray-600 mb-10 text-sm leading-relaxed">
          Advanced Tibetan formulations combining herbal, mineral, and spiritual healing systems.
        </p>

        {/* ACCORDION */}
        <div className="space-y-5">
          {sections.map((item, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">

              <button
                onClick={() => toggleItem(i)}
                className={`w-full px-6 py-4 flex justify-between items-center text-left transition ${
                  activeIndex === i
                    ? "bg-spa-green text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">{item.title}</span>
                <span className="text-xl">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              {activeIndex === i && (
                <div className="p-6 bg-white">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-md mx-auto mb-5 rounded-lg shadow"
                  />

                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TibetanMedicine;