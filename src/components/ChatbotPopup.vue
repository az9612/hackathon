<template>
  <div>
    <!-- Toggle Button -->
    <button class="btn btn-primary rounded-circle position-fixed"
            style="bottom: 20px; right: 20px; z-index: 1050;"
            @click="togglePopup">
      💬
    </button>

    <!-- Chat Popup -->
    <div v-if="isOpen" class="card shadow position-fixed"
         style="bottom: 80px; right: 20px; width: 300px; z-index: 1050;">
      <div class="card-header bg-primary text-white">
        Chatbot
        <button type="button" class="btn-close btn-close-white float-end" @click="togglePopup"></button>
      </div>
      <div class="card-body" style="height: 300px; overflow-y: auto;" ref="chatLog">
        <div class="text-muted mb-2">Hi! How can I help you?</div>
        <div v-for="(msg, index) in messages" :key="index" :class="{'text-end': msg.from === 'user', 'text-start': msg.from === 'bot'}">
          <span
            :class="['badge', 'text-start',msg.from === 'user' ? 'bg-secondary' : 'bg-light text-dark']"
            style="white-space: pre-wrap; word-break: break-word; display: inline-block; max-width: 100%;">
            {{ msg.text }}
          </span>
        </div>
      </div>
      <div class="card-footer">
        <div class="input-group">
          <input v-model="userInput" @keyup.enter="sendMessage" class="form-control" placeholder="Type a message..." />
          <button class="btn btn-primary" @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatbotPopup',
  data() {
    return {
      isOpen: false,
      userInput: '',
      messages: []
    };
  },
  methods: {
    togglePopup() {
      this.isOpen = !this.isOpen;
      this.$nextTick(() => {
        if (this.isOpen) this.scrollToBottom();
      });
    },
    sendMessage() {
      const message = this.userInput.trim();
      if (!message) return;

      // Add user message to chat log
      this.messages.push({ from: 'user', text: message });
      this.userInput = '';

      // Scroll to bottom after adding message
      this.scrollToBottom(); 
      fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
      body: JSON.stringify({
      model: "mistralai/mistral-small-3.2-24b-instruct:free",
      messages: [{ role: "user", content: message }]
  })
})
.then(res => res.json())
.then(data => {
  const reply = data.choices[0].message.content;
  this.messages.push({ from: 'bot', text: reply });
  this.scrollToBottom();
}).catch(err => {
    console.error("Error fetching reply:", err);
    this.messages.push({ from: 'bot', text: "Oops, something went wrong." });
  });
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatLog = this.$refs.chatLog;
        if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
      });
    }
  }
};
</script>
