import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let EditSyntaxComponent = class EditSyntaxComponent {
    constructor() {
        this.colors = [
            { name: 'Color 1', hex: '#FF0000' },
            { name: 'Color 2', hex: '#00FF00' },
            { name: 'Color 3', hex: '#0000FF' },
            { name: 'Color 4', hex: '#FFFF00' },
            { name: 'Color 5', hex: '#FF00FF' },
            { name: 'Color 6', hex: '#008000' },
            { name: 'Color 7', hex: '#800080' },
            { name: 'Color 8', hex: '#808000' },
            { name: 'Color 9', hex: '#800000' },
            { name: 'Color 10', hex: '#008080' }
        ];
        this.displayedColors = [];
        this.currentPage = 0;
        this.updateDisplayedColors();
    }
    updateDisplayedColors() {
        const startIndex = this.currentPage * 5;
        this.displayedColors = this.colors.slice(startIndex, startIndex + 5);
    }
    nextPage() {
        if ((this.currentPage + 1) * 5 < this.colors.length) {
            this.currentPage++;
            this.updateDisplayedColors();
        }
    }
    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updateDisplayedColors();
        }
    }
    updateColor(newHex, index) {
        this.colors[index].hex = newHex;
    }
    saveColors() {
        console.log('Colors saved:', this.colors);
    }
};
EditSyntaxComponent = __decorate([
    Component({
        selector: 'app-edit-syntax',
        standalone: true,
        imports: [CommonModule, FormsModule],
        templateUrl: './edit-syntax.component.html',
        styleUrl: './edit-syntax.component.css'
    })
], EditSyntaxComponent);
export { EditSyntaxComponent };
//# sourceMappingURL=edit-syntax.component.js.map