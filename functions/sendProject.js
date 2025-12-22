// functions/sendProject.js
export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    // Faz o POST para o n8n
    const response = await fetch(
      "https://n8n-n8n-start.7vwfqo.easypanel.host/webhook/automation_new_project",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const responseBody = await response.text(); // pega a resposta do n8n

    return {
      statusCode: response.ok ? 200 : 500,
      body: JSON.stringify({
        message: response.ok ? "Projeto enviado com sucesso!" : "Erro ao enviar projeto",
        n8nResponse: responseBody,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erro no servidor", error: error.message }),
    };
  }
}
