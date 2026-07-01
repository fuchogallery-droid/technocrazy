@echo off
title TechnoCrazy -- Sistema Avatar IA
color 0B
cls

echo.
echo  ████████╗███████╗ ██████╗██╗  ██╗███╗   ██╗ ██████╗  ██████╗██████╗  █████╗ ███████╗██╗   ██╗
echo  ╚══██╔══╝██╔════╝██╔════╝██║  ██║████╗  ██║██╔═══██╗██╔════╝██╔══██╗██╔══██╗╚════██║╚██╗ ██╔╝
echo     ██║   █████╗  ██║     ███████║██╔██╗ ██║██║   ██║██║     ██████╔╝███████║    ██╔╝ ╚████╔╝
echo     ██║   ██╔══╝  ██║     ██╔══██║██║╚██╗██║██║   ██║██║     ██╔══██╗██╔══██║   ██╔╝   ╚██╔╝
echo     ██║   ███████╗╚██████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╗██║  ██║██║  ██║   ██║     ██║
echo     ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     ╚═╝
echo.
echo  SISTEMA AVATAR IA -- Automatizacion de Contenido
echo  ==================================================
echo.

:: Verificar config.json
if not exist "%~dp0config.json" (
    echo  [AVISO] config.json no encontrado.
    echo  Copiando config.example.json como config.json...
    copy "%~dp0config.example.json" "%~dp0config.json" >nul
    echo  Por favor edita config.json con tus API keys antes de continuar.
    echo.
    start notepad "%~dp0config.json"
    pause
    exit /b
)

echo  Que deseas hacer?
echo.
echo  [1] Generar contenido AHORA (scripts de la semana)
echo  [2] Activar modo DAEMON (genera automaticamente cada lunes 8AM)
echo  [3] Abrir Colab - Voz con Rafael
echo  [4] Abrir Colab - Video con cara de Rafael
echo  [5] Abrir Colab - Imagenes de Rafael
echo  [6] Ver logs
echo  [7] Salir
echo.
set /p opcion="Selecciona una opcion (1-7): "

if "%opcion%"=="1" goto generar_ahora
if "%opcion%"=="2" goto modo_daemon
if "%opcion%"=="3" goto colab_voz
if "%opcion%"=="4" goto colab_video
if "%opcion%"=="5" goto colab_imagenes
if "%opcion%"=="6" goto ver_logs
if "%opcion%"=="7" exit /b

:generar_ahora
echo.
echo  [INFO] Generando contenido de la semana...
node "%~dp0automatizador.js" --ahora
echo.
echo  Revisa la carpeta output\ para ver los scripts generados.
pause
goto menu_fin

:modo_daemon
echo.
echo  [INFO] Activando modo daemon (lunes 8AM automatico)...
echo  La ventana debe permanecer abierta. Minimizala si quieres.
node "%~dp0automatizador.js" --programar

:colab_voz
start chrome "https://colab.research.google.com/"
echo  Abre el archivo: colab\VozClonada_TechnoCrazy.ipynb
echo  Arrastralo a Colab o subelo desde File > Upload notebook
pause
goto menu_fin

:colab_video
start chrome "https://colab.research.google.com/"
echo  Abre el archivo: colab\LivePortrait_TechnoCrazy.ipynb
pause
goto menu_fin

:colab_imagenes
start chrome "https://colab.research.google.com/"
echo  Abre el archivo: colab\ImagenesRafael_TechnoCrazy.ipynb
pause
goto menu_fin

:ver_logs
if exist "%~dp0logs\automatizador.log" (
    type "%~dp0logs\automatizador.log" | more
) else (
    echo  Sin logs todavia. Ejecuta el sistema primero.
)
pause

:menu_fin
echo.
echo  Presiona cualquier tecla para cerrar...
pause >nul
