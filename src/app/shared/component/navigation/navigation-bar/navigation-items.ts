import AppRoute from 'src/app/approutes.enum';
import { NavigationItems } from '../navigation-item/navigation-item.component';


export const navigationItems: NavigationItems = [
  {
    label: "Coleta",
    icon: "assignment",
    route: AppRoute.FORM,
    children: [
      {
        label: "Caracteristica",
        icon: "list",
        route: AppRoute.CHARACTERISTIC_ABSOLUTE
      },
      {
        label: "Campo",
        icon: "list",
        route: AppRoute.FIELD_ABSOLUTE
      },
      {
        label: "Configuração",
        icon: "list",
        route: AppRoute.CONFIGURATION_ABSOLUTE
      }
    ]
  },
  {
    label: "Módulo",
    icon: "view_module",
    route: AppRoute.MODULE,
    children: [
      {
        label: "Módulo",
        icon: "list",
        route: AppRoute.MODULE_ABSOLUTE
      },
      {
        label: "Modelo",
        icon: "list",
        route: AppRoute.TEMPLATE_ABSOLUTE,
        children: [
          {
            label: "Entrada",
            icon: "list",
            route: AppRoute.INPUT_TEMPLATE_ABSOLUTE
          },
          {
            label: "Saída",
            icon: "list",
            route: AppRoute.OUTPUT_TEMPLATE_ABSOLUTE
          }
        ]
      }
    ]
  }
]
