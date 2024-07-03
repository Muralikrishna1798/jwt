import { SafeUrl } from "@angular/platform-browser";

export interface FileHandle {
    file: File |null,
    url: SafeUrl
}