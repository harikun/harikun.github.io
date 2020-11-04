var dbPromised = idb.open("liga-inggris", 1, function(upgradeDb) {
  var articlesObjectStore = upgradeDb.createObjectStore("articles", {
    keyPath: "id"
  });
  articlesObjectStore.createIndex("idteam", "id", {
    unique: false
  });
});

function saveForLater(article) {
  dbPromised
    .then(function(db) {
      var tx = db.transaction("articles", "readwrite");
      var store = tx.objectStore("articles");
      console.log(article);
      store.add(article);
      return tx.complete;
    })
    .then(function() {
      console.log("Artikel berhasil di simpan.");
    });
}

function deleteArticle(article){
  dbPromised
    .then(function(db) {
      var tx = db.transaction('articles', 'readwrite');
      var store = tx.objectStore('articles');
      console.log(article.id)
      store.delete(article.id);
      return tx.complete;
    }).then(function() {
      console.log('Item deleted');
    });
}


function getAll() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("articles", "readonly");
        var store = tx.objectStore("articles");
        return store.getAll();
      })
      .then(function(articles) {
        resolve(articles);
      });
  });
}

function getAllByTitle(title) {
  dbPromised
    .then(function(db) {
      var tx = db.transaction("articles", "readonly");
      var store = tx.objectStore("articles");
      var titleIndex = store.index("post_title");
      var range = IDBKeyRange.bound(title, title + "\uffff");
      return titleIndex.getAll(range);
    })
    .then(function(articles) {
      console.log(articles);
    });
}

function getById(id) {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("articles", "readonly");
        var store = tx.objectStore("articles");
        return store.get(id);
      })
      .then(function(article) {
        resolve(article);
      });
  });
}