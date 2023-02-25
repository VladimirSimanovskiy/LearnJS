"use strict"

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[1] = "Классика";
alert ( styles.shift() );
styles.unshift("Рэп", "Регги");