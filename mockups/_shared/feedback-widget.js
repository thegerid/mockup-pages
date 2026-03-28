(function () {
  if (window.__feedbackWidgetMounted) return;
  window.__feedbackWidgetMounted = true;

  const tgUsername = window.FEEDBACK_TG_USERNAME || "demidenca";
  const webhookUrl = window.FEEDBACK_WEBHOOK_URL || "";

  const css = `
  .fw-btn{position:fixed;right:14px;bottom:14px;z-index:2147483000;border:0;border-radius:999px;padding:10px 14px;background:#0f766e;color:#fff;font:700 13px/1.1 "Segoe UI",Arial,sans-serif;box-shadow:0 10px 24px rgba(15,118,110,.28);cursor:pointer}
  .fw-backdrop{position:fixed;inset:0;z-index:2147483001;background:rgba(16,24,40,.38);display:none}
  .fw-backdrop.show{display:block}
  .fw-panel{position:fixed;right:14px;bottom:64px;z-index:2147483002;width:min(360px,calc(100vw - 28px));background:#fff;border:1px solid #d9e2ec;border-radius:16px;box-shadow:0 20px 40px rgba(16,24,40,.22);display:none}
  .fw-panel.show{display:block}
  .fw-head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 14px;border-bottom:1px solid #e6ecf2}
  .fw-head strong{font:800 15px/1.2 "Segoe UI",Arial,sans-serif;color:#102033}
  .fw-close{border:0;background:transparent;color:#667085;font-size:20px;line-height:1;cursor:pointer}
  .fw-body{padding:12px 14px;display:grid;gap:9px}
  .fw-row{display:grid;gap:5px}
  .fw-row label{font:700 12px/1.2 "Segoe UI",Arial,sans-serif;color:#344054}
  .fw-row input,.fw-row select,.fw-row textarea{width:100%;border:1px solid #d0d9e5;border-radius:10px;padding:9px 10px;background:#fff;color:#102033;font:14px/1.35 "Segoe UI",Arial,sans-serif;outline:0}
  .fw-row textarea{min-height:88px;resize:vertical}
  .fw-actions{display:flex;justify-content:flex-end;gap:8px;padding:0 14px 14px}
  .fw-secondary,.fw-primary{border:0;border-radius:10px;padding:9px 12px;font:700 13px/1.1 "Segoe UI",Arial,sans-serif;cursor:pointer}
  .fw-secondary{background:#edf2f7;color:#1f3552}
  .fw-primary{background:#0f766e;color:#fff}
  .fw-status{padding:0 14px 12px;color:#667085;font:12px/1.35 "Segoe UI",Arial,sans-serif;min-height:16px}
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const btn = document.createElement("button");
  btn.className = "fw-btn";
  btn.type = "button";
  btn.textContent = "Обратная связь";

  const backdrop = document.createElement("div");
  backdrop.className = "fw-backdrop";

  const panel = document.createElement("section");
  panel.className = "fw-panel";
  panel.innerHTML = `
    <div class="fw-head">
      <strong>Обратная связь</strong>
      <button class="fw-close" type="button" aria-label="Закрыть">×</button>
    </div>
    <div class="fw-body">
      <div class="fw-row">
        <label for="fwType">Тип</label>
        <select id="fwType">
          <option value="Замечание">Замечание</option>
          <option value="Предложение">Предложение</option>
        </select>
      </div>
      <div class="fw-row">
        <label for="fwName">Имя (необязательно)</label>
        <input id="fwName" type="text" maxlength="80" placeholder="Как к вам обращаться" />
      </div>
      <div class="fw-row">
        <label for="fwContact">Контакт (необязательно)</label>
        <input id="fwContact" type="text" maxlength="120" placeholder="Телеграм / почта / телефон" />
      </div>
      <div class="fw-row">
        <label for="fwText">Сообщение</label>
        <textarea id="fwText" maxlength="2000" placeholder="Опишите проблему или предложение"></textarea>
      </div>
    </div>
    <div class="fw-actions">
      <button class="fw-secondary" type="button" data-fw-cancel="1">Отмена</button>
      <button class="fw-primary" type="button" data-fw-send="1">Отправить</button>
    </div>
    <div class="fw-status" id="fwStatus"></div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(panel);
  document.body.appendChild(btn);

  const q = (s) => panel.querySelector(s);
  const fwType = q("#fwType");
  const fwName = q("#fwName");
  const fwContact = q("#fwContact");
  const fwText = q("#fwText");
  const fwStatus = q("#fwStatus");

  const setStatus = (text) => {
    fwStatus.textContent = text || "";
  };

  const open = () => {
    setStatus("");
    panel.classList.add("show");
    backdrop.classList.add("show");
    setTimeout(() => fwText.focus(), 0);
  };

  const close = () => {
    panel.classList.remove("show");
    backdrop.classList.remove("show");
  };

  const buildMessage = () => {
    const lines = [
      "Новая обратная связь с макета",
      `Тип: ${fwType.value}`,
      `Страница: ${document.title}`,
      `URL: ${location.href}`,
      `Имя: ${fwName.value.trim() || "—"}`,
      `Контакт: ${fwContact.value.trim() || "—"}`,
      "",
      fwText.value.trim()
    ];
    return lines.join("\n");
  };

  const sendToWebhook = async (payload) => {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  };

  const sendFallbackToTelegram = async (message) => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(message);
      copied = true;
    } catch {}

    const tgUrl = `https://t.me/${encodeURIComponent(tgUsername)}`;
    window.open(tgUrl, "_blank", "noopener,noreferrer");

    setStatus(copied
      ? "Текст скопирован. Открылся Telegram — вставьте и отправьте сообщение."
      : "Открылся Telegram. Скопируйте текст сообщения вручную и отправьте.");
  };

  btn.addEventListener("click", open);
  backdrop.addEventListener("click", close);
  q(".fw-close").addEventListener("click", close);
  q('[data-fw-cancel="1"]').addEventListener("click", close);

  q('[data-fw-send="1"]').addEventListener("click", async () => {
    const text = fwText.value.trim();
    if (!text) {
      setStatus("Введите текст сообщения.");
      fwText.focus();
      return;
    }

    const payload = {
      type: fwType.value,
      name: fwName.value.trim(),
      contact: fwContact.value.trim(),
      message: text,
      pageTitle: document.title,
      pageUrl: location.href,
      createdAt: new Date().toISOString()
    };

    const packed = buildMessage();

    try {
      if (webhookUrl) {
        await sendToWebhook(payload);
        setStatus("Сообщение отправлено.");
        fwText.value = "";
        setTimeout(close, 550);
        return;
      }
      await sendFallbackToTelegram(packed);
    } catch (err) {
      console.error(err);
      setStatus("Не удалось отправить автоматически. Открываю Telegram.");
      await sendFallbackToTelegram(packed);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
