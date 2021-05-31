import vim
from omnipytent import *


@task
def build(ctx):
    TERMINAL_PANEL('npm', 'run', 'build')


@task
def repl(ctx):
    TERMINAL_PANEL('npm', 'run', 'dev')
