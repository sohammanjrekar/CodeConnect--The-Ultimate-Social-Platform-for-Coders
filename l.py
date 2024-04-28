from transformers import AutoModelForCausalLM, AutoTokenizer

def list_available_models():
    models = AutoModelForCausalLM.from_pretrained("distilgpt2").list_models()
    print("Available models:")
    for model in models:
        print(model)

list_available_models()
