const { GoogleGenerativeAI } = require("@google/generative-ai");
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: Rs.${totalBudget}  
      - Expenses: Rs.${totalSpend}  
      - Incomes: Rs.${totalIncome} 
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    const result = await model.generateContent(userPrompt);
    const advice = result.response.text;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error.response ? error.response.data : error.message);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
