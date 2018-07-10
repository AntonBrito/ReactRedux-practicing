export function selectAnimal(animal) {

    return {
        type: 'ANIMAL_CLICKED',
        payload: animal,
        foo : 'foo'
    }
}