describe('types in typescript', () => {
    describe('declaring variables and constants', () => {

        it('implicity any', () => {
            // No Typescript in this example.
            let x;

            x = 'Tacos';
            expect(typeof x).toBe('string');

            x = 3.19;

            expect(typeof x).toBe('number');
            x = function () { }
            expect(typeof x).toBe('function');

            x = ['dog', 'cat', 'mouse', 99, 'tacos'];
            expect(typeof x).toBe('object');
        });
        it('implicity typing', () => {
            let name = 'Jeff'; // initialized to a string AND the value 'Jeff'

            let age;
            age = 51;
            age = 'old';

            let x: string | number = 'Tacos'; // Union Type

            x = 3.19;


            let y: number | number[];

            y = 99;
            y = [123];
        });

        it('has const', () => {
            // const does not allow reassignment. That's it.

            const x = 3.14; // YOU MUST INIITALIZE IT

            const favoriteNumbers = [9, 20, 108];

            //    favoriteNumbers = [1,2,3];

            favoriteNumbers[0] = 10;

            expect(favoriteNumbers).toEqual([10, 20, 108]);

            const movie = { title: 'Jaws', yearReleased: 1978 };

            // movie = { title: 'ET', yearReleased: 1983};

            movie.yearReleased = 1977;

            interface Movie { title: string; yearReleased: number; director: string };
            interface Song { title: string, yearOfProduction: number, singer: string };
            let art: Movie | Song;

            art = {
                title: 'Jaws',
                yearReleased: 1977,
                director: 'Spielberg'
            };

            art = {
                title: 'Cassavetes',
                yearOfProduction: 1993,
                singer: 'Fugazi'
            };

        });
    });

});

