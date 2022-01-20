import HearthstoneJSON from "hearthstonejson-client";

export class prg{
    args :string[];
    web : string;

    constructor(web:string){
        this.web = web;
    }

    load(argv :string[]) {
        this.args = argv;

        var hsjson = new HearthstoneJSON();

        // get the latest data
        hsjson.getLatest().then(cards => {
        //console.log(cards);
        });

        switch(this.args[0]){
            case "sync":
                this.sync();
                break;
            case "dust":
                this.dust();
                break;
        }
    }

    sync(){
        
    }

    dust(){

    }
}