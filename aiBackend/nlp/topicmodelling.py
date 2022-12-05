

class TopicModelling():
    def __init__(self) -> None:
        pass

    def makePrediction(self, input):
        from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
        
        print('Start')
        print(input)

        mname = "cristian-popa/bart-tl-ng"
        tokenizer = AutoTokenizer.from_pretrained(mname)
        model = AutoModelForSeq2SeqLM.from_pretrained(mname)

        enc = tokenizer(input, return_tensors="pt", truncation=True, padding="max_length", max_length=128)
        outputs = model.generate(
            input_ids=enc.input_ids,
            attention_mask=enc.attention_mask,
            max_length=15,
            min_length=1,
            do_sample=False,
            num_beams=25,
            length_penalty=1.0,
            repetition_penalty=1.5
        )

        decoded = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return decoded

