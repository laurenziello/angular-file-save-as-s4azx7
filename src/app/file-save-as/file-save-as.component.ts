import { Component, Input } from "@angular/core";

@Component({
  selector: "file-save-as",
  templateUrl: "./file-save-as.component.html",
  styleUrls: ["./file-save-as.component.css"]
})
export class FileSaveAsComponent {
  @Input() fileContent: any;

  saveAsProject() {
    //you can enter your own file name and extension
    this.writeContents(
      this.fileContent,
      "Sample File" + ".pdf",
      "application/pdf"
    );
  }
  writeContents(contents, fileName, contentType) {

    var byteCharacters = atob(contents);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);

    var a = document.createElement("a");
    var file = new Blob([byteArray], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
