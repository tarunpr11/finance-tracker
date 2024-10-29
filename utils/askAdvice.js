const { GoogleGenerativeAI } = require("@google/generative-ai");
const askAdvice = async (totalBudget, totalIncome, totalSpend, input) => {
  console.log(totalBudget, totalIncome, totalSpend,input);
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  try {
    const userPrompt = `
      This is the user input: ${input},
      This is the users financial data:
      - Total Budget: Rs.${totalBudget}  
      - Expenses: Rs.${totalSpend}  
      - Incomes: Rs.${totalIncome} 
      Answer the user input only if it is related to finance. Answer in two to three lines
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

export default askAdvice;
