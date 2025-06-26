
export const generateMockAnalysis = () => {
  return {
    skinType: "Combination",
    confidence: 92,
    issues: [
      { name: "Mild Acne", severity: "Low", confidence: 87 },
      { name: "Enlarged Pores", severity: "Medium", confidence: 82 },
      { name: "Slight Oiliness", severity: "Low", confidence: 89 }
    ],
    skinTexture: "Smooth with some roughness in T-zone",
    recommendations: {
      morning: [
        { step: 1, product: "Gentle Foam Cleanser", category: "Cleanser" },
        { step: 2, product: "Niacinamide Toner", category: "Toner" },
        { step: 3, product: "Hyaluronic Acid Serum", category: "Serum" },
        { step: 4, product: "Light Moisturizer", category: "Moisturizer" },
        { step: 5, product: "SPF 30+ Sunscreen", category: "Sunscreen" }
      ],
      evening: [
        { step: 1, product: "Oil Cleanser", category: "Cleanser" },
        { step: 2, product: "Gentle Foam Cleanser", category: "Second Cleanser" },
        { step: 3, product: "BHA Exfoliant (2x/week)", category: "Treatment" },
        { step: 4, product: "Retinol Serum (3x/week)", category: "Serum" },
        { step: 5, product: "Night Moisturizer", category: "Moisturizer" }
      ]
    }
  };
};
