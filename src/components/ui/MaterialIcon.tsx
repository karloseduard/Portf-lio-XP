import AccountBalanceWallet from '@material-symbols/svg-400/outlined/account_balance_wallet.svg?react';
import AccountBox from '@material-symbols/svg-400/outlined/account_box.svg?react';
import ArrowBack from '@material-symbols/svg-400/outlined/arrow_back.svg?react';
import ArrowForward from '@material-symbols/svg-400/outlined/arrow_forward.svg?react';
import CheckCircle from '@material-symbols/svg-400/outlined/check_circle.svg?react';
import Close from '@material-symbols/svg-400/outlined/close.svg?react';
import Cloud from '@material-symbols/svg-400/outlined/cloud.svg?react';
import CloudDownload from '@material-symbols/svg-400/outlined/cloud_download.svg?react';
import Code from '@material-symbols/svg-400/outlined/code.svg?react';
import Computer from '@material-symbols/svg-400/outlined/computer.svg?react';
import Description from '@material-symbols/svg-400/outlined/description.svg?react';
import DesktopWindows from '@material-symbols/svg-400/outlined/desktop_windows.svg?react';
import DriveFolderUpload from '@material-symbols/svg-400/outlined/drive_folder_upload.svg?react';
import Folder from '@material-symbols/svg-400/outlined/folder.svg?react';
import FolderOpen from '@material-symbols/svg-400/outlined/folder_open.svg?react';
import FolderSpecial from '@material-symbols/svg-400/outlined/folder_special.svg?react';
import FolderZip from '@material-symbols/svg-400/outlined/folder_zip.svg?react';
import Groups from '@material-symbols/svg-400/outlined/groups.svg?react';
import Link from '@material-symbols/svg-400/outlined/link.svg?react';
import Mail from '@material-symbols/svg-400/outlined/mail.svg?react';
import Memory from '@material-symbols/svg-400/outlined/memory.svg?react';
import MilitaryTech from '@material-symbols/svg-400/outlined/military_tech.svg?react';
import OpenInNew from '@material-symbols/svg-400/outlined/open_in_new.svg?react';
import PictureAsPdf from '@material-symbols/svg-400/outlined/picture_as_pdf.svg?react';
import RadioButtonChecked from '@material-symbols/svg-400/outlined/radio_button_checked.svg?react';
import SportsEsports from '@material-symbols/svg-400/outlined/sports_esports.svg?react';
import Terminal from '@material-symbols/svg-400/outlined/terminal.svg?react';
import Trophy from '@material-symbols/svg-400/outlined/trophy.svg?react';
import Verified from '@material-symbols/svg-400/outlined/verified.svg?react';
import VolumeUp from '@material-symbols/svg-400/outlined/volume_up.svg?react';
import Wifi from '@material-symbols/svg-400/outlined/wifi.svg?react';
import WorkHistory from '@material-symbols/svg-400/outlined/work_history.svg?react';

const icons = {
  account_balance_wallet: AccountBalanceWallet,
  account_box: AccountBox,
  arrow_back: ArrowBack,
  arrow_forward: ArrowForward,
  check_circle: CheckCircle,
  close: Close,
  cloud: Cloud,
  cloud_download: CloudDownload,
  code: Code,
  computer: Computer,
  description: Description,
  desktop_windows: DesktopWindows,
  drive_folder_upload: DriveFolderUpload,
  folder: Folder,
  folder_open: FolderOpen,
  folder_special: FolderSpecial,
  folder_zip: FolderZip,
  groups: Groups,
  link: Link,
  mail: Mail,
  memory: Memory,
  military_tech: MilitaryTech,
  open_in_new: OpenInNew,
  picture_as_pdf: PictureAsPdf,
  radio_button_checked: RadioButtonChecked,
  sports_esports: SportsEsports,
  terminal: Terminal,
  trophy: Trophy,
  verified: Verified,
  volume_up: VolumeUp,
  wifi: Wifi,
  work_history: WorkHistory,
};

export type MaterialIconName = keyof typeof icons;

type MaterialIconProps = {
  name: MaterialIconName;
  className?: string;
};

export function MaterialIcon({ name, className = '' }: MaterialIconProps) {
  const Icon = icons[name];

  return <Icon className={`material-icon ${className}`} aria-hidden="true" focusable="false" />;
}
