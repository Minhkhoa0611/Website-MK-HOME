// 📌 Deploy this script as a Web App để trả về cấu hình Telegram với hỗ trợ CORS
function doGet() {
    const TELEGRAM_BOT_TOKEN = "7701091551:AAHiuvyHcywcpVJ40PjRHTOyTb89RirN5RQ";
    const TELEGRAM_CHAT_ID = "7991407654";

    const jsonResponse = JSON.stringify({
        TELEGRAM_BOT_TOKEN: TELEGRAM_BOT_TOKEN,
        TELEGRAM_CHAT_ID: TELEGRAM_CHAT_ID
    });

    // Trả về JSON với tiêu đề CORS
    return ContentService.createTextOutput(jsonResponse)
        .setMimeType(ContentService.MimeType.JSON);
}
