dbslink.connect(function(err) {
    if (err) throw err;
    console.log("Connecteé Xampp!");
    dbslink.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  }); 