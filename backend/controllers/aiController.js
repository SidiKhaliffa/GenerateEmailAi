exports.generateEmail = async (req, res) => {
    try {
      const { clientName, company, description, tone } = req.body;
  
      const prompt = `
  You are a professional business email assistant.
  
  Write an email with the following tone: ${tone}
  
  Client Name: ${clientName}
  Company: ${company}
  
  Email objective:
  ${description}
  
  The email must include:
  - Subject line
  - Greeting
  - Body
  - Closing signature
  
  Make the tone clearly ${tone}.
  `;
  
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
          }),
        }
      );
  
      const data = await response.json();
  
      res.json({
        email: data.choices[0].message.content,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "AI generation failed" });
    }
  };