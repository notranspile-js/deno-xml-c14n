const entities = {
  "&":  "&amp;",
  "\"": "&quot;",
  "<":  "&lt;",
  ">":  "&gt;",
  "\t": "&#x9;",
  "\n": "&#xA;",
  "\r": "&#xD;",
};

function attributeEntities(string) {
  return string.replace(/([\&<"\t\n\r])/g, function(character) {
    return entities[character];
  });
};

function textEntities(string) {
  return string.replace(/([\&<>\r])/g, function(character) {
    return entities[character];
  });
};

const e = {
  entities,
  attributeEntities,
  textEntities,
}

export default e;
