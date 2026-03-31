function analyzeText() {
  const text = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  // Clear previous output
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  // Empty check
  if (text.trim() === "") {
    errorDiv.innerHTML = "⚠️ Please enter some text!";
    return;
  }

  // Character count
  const charCount = text.length;

  // Word count
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  // Sentence count
  const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "");
  const sentenceCount = sentences.length;

  // Reverse text
  const reversedText = text.split("").reverse().join("");

  // Display result
  resultDiv.innerHTML = `
    <p><strong>Character Count:</strong> ${charCount}</p>
    <p><strong>Word Count:</strong> ${wordCount}</p>
    <p><strong>Sentence Count:</strong> ${sentenceCount}</p>
    <hr>
    <p><strong>Reversed Text:</strong></p>
    <p>${reversedText}</p>
  `;
}