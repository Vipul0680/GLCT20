import PyPDF2
import sys

try:
    with open("GLCT20pdf (1).pdf (10).pdf", "rb") as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            if page_text:
                text += f"--- Page {i+1} ---\n{page_text}\n"
        
    with open("extracted_text.txt", "w", encoding="utf-8") as out:
        out.write(text)
    print("Text extracted successfully to extracted_text.txt")
except Exception as e:
    print("Error:", e)
