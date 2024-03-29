import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "bypassSanitizer"
})
export class BypassSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
    if (html) {
      return this.domSanitizer.bypassSecurityTrustHtml(html);
    } else {
      return "...";
    }
  }
}
