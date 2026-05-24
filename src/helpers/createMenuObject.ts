type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

interface MenuObject {
    all: boolean;
    dogs: boolean;
    cats: boolean;
    fishes: boolean;
}

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject: MenuObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    if (activeMenu !== '') {
        returnObject[activeMenu as keyof MenuObject] = true;
    }

    return returnObject;
};
