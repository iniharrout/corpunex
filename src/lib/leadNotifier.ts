/**
 * Corpunex Lead Notification Dispatcher
 * Directly forwards form submissions and lead captures to Google Chat webhook
 * with full provenance tracking (website origin, page URL, specific form name, referrer, timestamp).
 */

export const GOOGLE_CHAT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_CHAT_WEBHOOK_URL ||
  "https://chat.googleapis.com/v1/spaces/AAQAgcxp6nM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=NYzpLArOTxnwEYuEzvw094eXwTbbpD_WZs2ugBGOH7U";

export interface LeadNotificationPayload {
  formName: string;
  name: string;
  phone?: string;
  email?: string;
  topic?: string;
  message?: string;
  extra?: Record<string, string | number | boolean | null | undefined>;
}

/**
 * Format and dispatch lead to Google Chat
 */
export async function postLeadToGoogleChat(data: LeadNotificationPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const isBrowser = typeof window !== "undefined";
    const website = isBrowser ? window.location.origin : "https://www.corpunex.com";
    const pageUrl = isBrowser ? window.location.href : "https://www.corpunex.com";
    const referrer = isBrowser && document.referrer ? document.referrer : "Direct / None";

    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    }).format(now);

    const lines: string[] = [
      "🎯 *NEW LEAD ALERT — Corpunex*",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `📋 *Form Source:* ${data.formName}`,
      `🌐 *Website:* ${website}`,
      `📍 *Page URL:* ${pageUrl}`,
      `👤 *Name:* ${data.name.trim()}`,
      `📱 *Phone / Mobile:* ${data.phone ? data.phone.trim() : "Not provided"}`,
      `✉️ *Email:* ${data.email ? data.email.trim() : "Not provided"}`,
      `🏷️ *Service / Topic:* ${data.topic || "General Enquiry"}`,
    ];

    if (data.message && data.message.trim()) {
      lines.push(`💬 *Message / Notes:*\n${data.message.trim()}`);
    }

    if (data.extra && Object.keys(data.extra).length > 0) {
      lines.push("📝 *Additional Context:*");
      for (const [k, v] of Object.entries(data.extra)) {
        if (v !== undefined && v !== null && v !== "") {
          lines.push(`   • *${k}:* ${v}`);
        }
      }
    }

    lines.push(`🔗 *Referrer:* ${referrer}`);
    lines.push(`⏰ *Timestamp (IST):* ${formattedDate}`);
    lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    const messagePayload = {
      text: lines.join("\n"),
    };

    const response = await fetch(GOOGLE_CHAT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(messagePayload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Google Chat webhook error:", response.status, errText);
      return { success: false, error: `Webhook returned ${response.status}: ${errText}` };
    }

    return { success: true };
  } catch (err) {
    console.error("Failed to post lead to Google Chat:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error occurred while posting lead",
    };
  }
}
