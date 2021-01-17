import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit} from '@angular/core';
import {OpModalLocalsMap} from 'core-components/op-modals/op-modal.types';
import {OpModalComponent} from 'core-components/op-modals/op-modal.component';
import {I18nService} from "core-app/modules/common/i18n/i18n.service";
import {OpModalLocalsToken} from "core-components/op-modals/op-modal.service";

@Component({
  templateUrl: './hello-world.modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorldModal extends OpModalComponent implements OnInit {
  public closeOnEscape = true;
  public closeOnOutsideClick = true;

  public text = {
    closePopup: this.I18n.t('js.close_popup_title'),
  };

  helloWorldModalText: any;

  constructor(@Inject(OpModalLocalsToken) public locals:OpModalLocalsMap,
              readonly I18n:I18nService,
              readonly elementRef:ElementRef,
              readonly cdRef:ChangeDetectorRef) {
    super(locals, cdRef, elementRef);
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.locals.text) {
      this.helloWorldModalText = this.locals.text;
    }
  }
}
