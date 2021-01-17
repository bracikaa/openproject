import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { I18nService } from "core-app/modules/common/i18n/i18n.service";
import { Observable } from "rxjs";
import { UntilDestroyedMixin } from "core-app/helpers/angular/until-destroyed.mixin";
import { componentDestroyed } from "@w11k/ngx-componentdestroyed";
import { OpModalService } from "core-app/components/op-modals/op-modal.service";
import { HelloWorldModal } from "core-app/components/modals/hello-world-modal/hello-world.modal";

@Component({
  selector: "wp-hello-world-button",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./hello-world.html",
})
export class HelloWorldButtonComponent extends UntilDestroyedMixin implements OnInit, OnDestroy {
  @Input("allowed") allowedWhen: string[];
  @Input("stateName$") stateName$: Observable<string>;

  allowed: boolean = true;
  disabled: boolean;

  text = {
    raiseModal: "MODAL PLS!",
  };

  constructor(
    readonly I18n: I18nService,
    readonly injector: Injector,
    readonly cdRef: ChangeDetectorRef,
    readonly opModalService: OpModalService
  ) {
    super();
  }

  ngOnInit() {
  }

  showModal(): void {
    this.opModalService.show(HelloWorldModal, this.injector, { text: "HELLO WORLD!!!" });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private updateDisabledState() {
    this.disabled = !this.allowed;
    this.cdRef.detectChanges();
  }
}
