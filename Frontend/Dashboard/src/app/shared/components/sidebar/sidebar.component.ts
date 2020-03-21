import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  arr = [
    { links: "/", title: "Dashboard" },
    { links: "/map", title: "Map" },
    {links:"/upload-file", title:"Upload-File"},
    { links: "/articles", title: "Articles" }
  ];
  Tools = [
    { links: "/contacts", title: "Contacts", icon: "import_contacts" }
    // { links: "/map", title: "Map", icon: "import_contacts" },
    // { links: "/articles", title: "Articles", icon: "import_contacts" }
  ];

  constructor() {}

  ngOnInit() {}
}
