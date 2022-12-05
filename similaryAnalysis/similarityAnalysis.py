print('Printing from docker')
from sentence_transformers import SentenceTransformer, util
import numpy as np
from numpy.linalg import norm

modelPath="./models/"
model = SentenceTransformer(modelPath)

#model.save(modelPath)

#model = SentenceTransformer(modelPath)

searchSentence = '123 Main Street Unit 4 Scranton A1B 2C3'
searchSentenceArray=[]
# Single list of sentences
sentences = ['123 Main st Unit 5 Scranton A1B 2C3',
             'A1278 Smith Bro  546 Old Elm memphis 38116-0124',
             '18763 Smith Brothers 546 old elm lane memphis TN 38116',
             'Audrey McArthur 2 Kensworth Close Manchester',
             'Steven Bailey 39 Addison Crescent Manchester',
             'Phillip Jones 59 St Marys Hall Manchester',
             'Linda Mooring 11 Central Avenue Oakdale',
             'Jonathan Mudd Squirrels Hollow Lane Godshill',
             'Jacqueline Murphy 23 Orchard Close Nuneaton',
             'Keith Nicolson 198 Oval Road North Dagenham',
             'Steve Bailey Addison Crescent Manchester',
             '39 Addison Crescent Steven Bailey Manchester']

for i in range(len(sentences)):    
    searchSentenceArray.append(searchSentence)


#Compute embeddings
embeddings = model.encode(sentences, convert_to_tensor=True)

searchEmbeddings = model.encode(searchSentenceArray, convert_to_tensor=True)



print(len(embeddings))
print(len(searchEmbeddings))

print('-----------------')

#Compute cosine-similarities for each sentence with each other sentence
cosine_scores = util.cos_sim(searchEmbeddings, embeddings)
print(len(cosine_scores))


#Output the pairs with their score
for i in range(len(sentences)):
    print("{} \t\t {} \t\t Score: {:.4f}".format(sentences[i], searchSentenceArray[i], cosine_scores[i][i]))

