const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");

router.get("/products", async (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = `SELECT * FROM products`;
      conn.query(qry, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end;
    }
  });
});

module.exports = router;
