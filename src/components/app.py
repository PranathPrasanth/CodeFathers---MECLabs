from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer

app = Flask(__name__)

# Load the pre-trained model and tokenizer
model_name = "gpt2"  # Replace with your desired model (e.g., "gpt2", "gpt-j")
model = AutoModelForCausalLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

@app.route('/api/mentor', methods=['POST'])
def generate_response():
    try:
        data = request.get_json()
        prompt = data['prompt']

        # Generate response using the model
        input_ids = tokenizer(prompt, return_tensors="pt").input_ids
        output = model.generate(input_ids, max_length=100, do_sample=True)  # Adjust parameters as needed
        generated_text = tokenizer.decode(output[0], skip_special_tokens=True)

        return jsonify({'response': generated_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)