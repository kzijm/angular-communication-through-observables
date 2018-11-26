export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // open modal specified by id
        const modal: any = this.modals.filter(x => x.id === id)[0];
        if (modal) {
            modal.open();
        } else {
            console.error('@ModalService open: modal does not exist');
        }
    }

    close(id: string) {
        // close modal specified by id
        const modal: any = this.modals.filter(x => x.id === id)[0];
        if (modal) {
            modal.close();
        } else {
            console.error('@ModalService close: modal does not exist');
        }
    }

    hide(id: string) {
        // hide modal specified by id
        const modal: any = this.modals.filter(x => x.id === id)[0];
        if (modal) {
            modal.hide();
        } else {
            console.error('@ModalService hide: modal does not exist');
        }
    }
}
