require("./helpers.js");

let cats = ["Milo", "Otis", "Garfield"];

describe("index.js", function () {
  describe("cats", function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe("Array functions", function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push("Milo", "Otis", "Garfield");
    });

    destructivelyAppendCat = (name) => {
      cats.push(name);
    };

    describe("destructivelyAppendCat(name)", function () {
      it("appends a cat to the end of the cats array", function () {
        destructivelyAppendCat("Ralph");

        expect(cats).to.have.ordered.members([
          "Milo",
          "Otis",
          "Garfield",
          "Ralph",
        ]);
      });
    });

    destructivelyPrependCat = (name) => {
      cats.unshift(name);
    };

    describe("destructivelyPrependCat(name)", function () {
      it("prepends a cat to the beginning of the cats array", function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members([
          "Bob",
          "Milo",
          "Otis",
          "Garfield",
        ]);
      });
    });

    destructivelyRemoveLastCat = () => {
      cats.pop("Garfield");
    };

    describe("destructivelyRemoveLastCat()", function () {
      it("removes the last cat from the cats array", function () {
        destructivelyRemoveLastCat();

        expect(cats)
          .to.have.ordered.members(["Milo", "Otis"])
          .and.to.not.include("Garfield");
      });
    });
    destructivelyRemoveFirstCat = () => {
      cats.shift("Milo");
    };
    describe("destructivelyRemoveFirstCat()", function () {
      it("removes the first cat from the cats array", function () {
        destructivelyRemoveFirstCat();

        expect(cats)
          .to.have.ordered.members(["Otis", "Garfield"])
          .and.to.not.include("Milo");
      });
    });

    let appendCat = (name) => {
      return [...cats, name];
    };
    describe("appendCat(name)", function () {
      it("appends a cat to the cats array and returns a new array, leaving the cats array unchanged", function () {
        expect(appendCat("Broom")).to.have.ordered.members([
          "Milo",
          "Otis",
          "Garfield",
          "Broom",
        ]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    const prependCat = (name) => {
      return [name, ...cats];
    };

    describe("prependCat(name)", function () {
      it("prepends a cat to the cats array and returns a new array, leaving the cats array unchanged", function () {
        expect(prependCat("Arnold")).to.have.ordered.members([
          "Arnold",
          "Milo",
          "Otis",
          "Garfield",
        ]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    let removeLastCat = () => {
      return cats.slice(0, cats.length - 1);
    };

    describe("removeLastCat()", function () {
      it("removes the last cat in the cats array and returns a new array, leaving the cats array unchanged", function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        const removeFirstCat = () => {
          return cats.slice(1);
        };

        describe("removeFirstCat()", function () {});
      });

      describe("removeFirstCat()", function () {
        it("removes the first cat from the cats array and returns a new array, leaving the cats array unchanged", function () {
          expect(removeFirstCat()).to.have.ordered.members([
            "Otis",
            "Garfield",
          ]);

          expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
        });
      });
    });
  });
});
