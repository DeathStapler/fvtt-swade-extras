
export const CARD_TYPES = {
    DRAMATIC_TASK: 1,
    SOCIAL_CONFLICT: 2,
    NETWORKING: 3,
}

export class SwadeExtrasCard {
    /**
     * 
     * @param {ChatMessage} message 
     */
    constructor(message) {
        this.message = message; //  Store the ChatMessage
        this.type = undefined;
    }

    async save() {

    }
}
