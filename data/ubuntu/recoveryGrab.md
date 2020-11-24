Восстановление с помощью LiveCD/USB

узнать название раздела с linux
sudo fdisk -l

примонтировать раздел c linux
sudo mount /dev/sda1 /mnt

Затем, для записи grub в MBR, вводите следующую команду:
sudo grub-install --root-directory=/mnt /dev/sda

В случае, если нужно только восстановить MBR диска (например, после переустановки Windows), то этого достаточно.
Если нужно обновить и меню grub (например, после установки Windows), то нужно сделать:
sudo update-grub --output=/mnt/boot/grub/grub.cfg
