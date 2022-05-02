import { FileSystemAdapter } from 'obsidian';

export function getVaultRoot() {
  // This is a desktop only plugin, so assume adapter is FileSystemAdapter
  return (app.vault.adapter as FileSystemAdapter).getBasePath();
}

export function copyElToClipboard(el: HTMLElement) {
  require('electron').clipboard.writeHTML(el.outerHTML);
}
