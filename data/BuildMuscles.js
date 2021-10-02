const building = [
    {
        workoutId: 0,
        name: 'Skinny Legs',
        image: require('../assets/skinnyLegs.jpg'),
        category: [
            {
                id: '1',
                catName: 'Squat Jumps',
                circuit: {
                    1: 'Circuit 1: 15 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/jumpSquat.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'Smith Machine Calf Raise',
                circuit: {
                    1: 'Circuit 1: 12 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/smithMachineCalfRaise.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Split Squats',
                circuit: {
                    1: 'Circuit 1: 12 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/splitSquat.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'Lunges',
                circuit: {
                    1: 'Circuit 1: 15 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/lunges.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: 1,
        name: 'Shoulders',
        image: require('../assets/shoulders.jpg'),
        category: [
            {
                id: '1',
                catName: 'Barbell Shoulder Press',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'Shrugs',
                circuit: {
                    1: 'Circuit 1: 12 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Lateral Raise',
                circuit: {
                    1: 'Circuit 1: 12 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: 2,
        name: 'Biceps',
        image: require('../assets/biceps.jpg'),
        category: [
            {
                id: '1',
                catName: 'Pull Ups',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 8 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'Hammer Curls',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Barbell Curls',
                circuit: {
                    1: 'Circuit 1: 12 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'Bar Preacher Curls',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: 3,
        name: 'Triceps',
        image: require('../assets/triceps.jpg'),
        category: [
            {
                id: '1',
                catName: 'Lying Triceps Extension',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'Bench Dips',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 14 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Close Grip EZ Bar Bench Press',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'Tricep Dips',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 14 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: 4,
        name: 'Abs',
        image: require('../assets/abs.jpg'),
        category: [
            {
                id: '1',
                catName: 'Swiss Ball Crunches',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'Plank',
                circuit: {
                    1: 'Circuit 1: Hold the Position for 1 min',
                    2: 'Circuit 2: Hold the Position for 1 min',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Bicycle Crunches',
                circuit: {
                    1: 'Circuit 1: 12 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'Lying Leg Raise',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '5',
                catName: 'Declie Oblique Crunches',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 14 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: 5,
        name: 'Back',
        image: require('../assets/back.jpg'),
        category: [
            {
                id: '1',
                catName: 'Dumbell Bent Over',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'DeadLift',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Hyper Extension',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: 6,
        name: 'Chest',
        image: require('../assets/chest.jpg'),
        category: [
            {
                id: '1',
                catName: 'Plain Bench Barbell Press',
                circuit: {
                    1: 'Circuit 1: 14 Reps',
                    2: 'Circuit 2: 10 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'Incline Bench Dumbell Press',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'Push Ups',
                circuit: {
                    1: 'Circuit 1: 15 Reps',
                    2: 'Circuit 2: 12 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'Butterfly',
                circuit: {
                    1: 'Circuit 1: 10 Reps',
                    2: 'Circuit 2: 14 Reps',
                },
                image1: require('../assets/workout.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
]

export default building;